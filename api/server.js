const express = require('express');
const cors = require("cors")
const morgan = require("morgan")
const path = require('path');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const userRoutes = require("./routes/users");
const projectRoutes = require("./routes/projectRoute")
const app = express();
const User = require("./models/user");
const Projects = require("./models/projects");
app.use(cors()); //enables CORS middleware to handle cross-origin request
app.use(morgan("dev")); //use morgan middleware w/ "dev"
app.use(express.json());

//routing middleware
app.use("/api/users", userRoutes);
app.use("/projects", projectRoutes);

// Sample user data
const users = [
    { id: 1, username: 'user1', password: null }
];

(async () => {
    const hashedPassword = await bcrypt.hash('password123', 10);
    users[0].password = hashedPassword;
})();


app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
})

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
})

app.get('/signupcomplete', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
})

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
})

app.get('/newproject', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
})

app.use(bodyParser.json());

// Middleware to store current user information
let currentUser = null;

// Login route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    
    try {
        const result = await User.getByUsername(username);
        const user = result.rows[0];
        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        if (await bcrypt.compare(password, user.password)) {
            currentUser = {
                user_id: user.user_id,
                username: user.name,
                status: user.status,
                associated_clients: user.associated_clients
            };
            return res.status(200).json({ message: 'Login successful' });
        } else {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
});

//admin account creation route
app.post('/createAdmin', async (req, res) => {
    const {username, password, passwordC, client} = req.body;
    
    try {
        // Check if the client already exists
        const result = await User.getByUsername(username);
        const existingUser = result.rows[0];
        if (existingUser) {
          return res.status(401).json({ message: 'Client already exists' });
        }
    
        // Make sure password and confirmation match
        if (password !== passwordC) {
          return res.status(401).json({ message: 'Password and confirmation do not match!' });
        }
    
        // Create admin account
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.register({
          name: username,
          password: hashedPassword,
          status: 'Admin',
          associated_clients: client,
        });
    
        return res.status(200).json({ message: 'Admin created successfully', user: newUser });
      } catch (error) {
        console.error('Error creating admin:', error);
        return res.status(500).json({ message: 'Internal server error' });
      }
});

app.post('/changepassword', async (req, res) => {
    const { passwordOld, password, passwordC } = req.body;

    try {
    // Find the user with the current user id
    const user = currentUser;
    if (!user) {
        return res.status(401).json({ message: 'User not found' });
    }

    // retrieve user password and Check if the old password matches
    const result = await User.getByUserId(user.user_id);
    const storedUser = result.rows[0];
    if (!(await bcrypt.compare(passwordOld, storedUser.password))) {
        return res.status(401).json({ message: 'Invalid old password' });
    }
    // Make sure the new password and confirmation match
    if (password !== passwordC) {
        return res.status(401).json({ message: 'Password confirmation does not match' });
    }
    console.log("got here!");
    // Hash the new password and update user password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("got here!");
    await User.updatePassword(user.user_id, hashedPassword);
    currentUser.password = hashedPassword;
    return res.status(200).json({ message: 'Password changed successfully' });
    } catch (error) {
        console.error('Error changing password:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/deleteaccount', async (req, res) => {
    try {
    console.log("this code is executing");
    // Find the user with the current user id
    const user = currentUser;
    if (!user) {
        return res.status(401).json({ message: 'User not found' });
    }
    // Remove the user from the database
    await User.deleteUser(user.user_id);
    currentUser = null;
    return res.status(200).json({ message: 'Account deleted successfully' });
    } catch (error) {
        console.error('Error deleting account:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/createUser', async (req, res) => {
    try {
    const { username, password, passwordC, role } = req.body;
    // Check if username already exists
    const result = await User.getByUsername(username);
    const existingUser = result.rows[0];
    if (existingUser) {
        return res.status(401).json({ message: 'Username already exists' });
    }
    // Make sure password and confirmation match
    if (password !== passwordC) {
        return res.status(401).json({ message: 'Password and confirmation do not match' });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    await User.register({
        name: username,
        password: hashedPassword,
        status: role,
        associated_clients: currentUser.associated_clients,
    });
    return res.status(200).json({ message: 'Account created successfully' });
    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

app.post('/createProject', async (req, res) => {
    //TODO: Add functionality
    return res.status(200).json({ message: 'project created successfully' });
});

// Starts server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));