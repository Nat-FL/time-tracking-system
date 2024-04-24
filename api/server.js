const express = require('express');
const cors = require("cors")
const morgan = require("morgan")
const path = require('path');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const userRoutes = require("./routes/users");
const app = express();
const User = require("./models/user");

app.use(cors()); //enables CORS middleware to handle cross-origin request
app.use(morgan("dev")); //use morgan middleware w/ "dev"
app.use(express.json());

//routing middleware
app.use("/api/users", userRoutes);

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
          status: 'admin',
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
    // Find the user with the current user id
    const user = users.find(user => user.id === currUserid);
    if (!user) {
        return res.status(401).json({ message: 'User not found' });
    }
    // Check if the old password matches
    if (!(await bcrypt.compare(passwordOld, user.password))) {
        return res.status(401).json({ message: 'Invalid old password' });
    }
    // Make sure the new password and confirmation match
    if (password !== passwordC) {
        return res.status(401).json({ message: 'Password confirmation does not match' });
    }
    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Update the user's password in the users array
    user.password = hashedPassword;
    return res.status(200).json({ message: 'Password changed successfully' });
});

app.post('/deleteaccount', async (req, res) => {
    // Find the index of the user to be deleted
    const index = users.findIndex(user => user.id === currUserid);
    if (index === -1) {
        return res.status(401).json({ message: 'User not found' });
    }
    // Remove the user from the users array
    users.splice(index, 1);
    // Shift the ids of users with a bigger id down by 1
    for (let i = index; i < users.length; i++) {
        users[i].id -= 1;
    }
    return res.status(200).json({ message: 'Account deleted successfully' });
});

app.post('/createUser', async (req, res) => {
    const { username, password, passwordC } = req.body;
    // Check if username already exists
    const userExists = users.some(user => user.username === username);
    if (userExists) {
        return res.status(401).json({ message: 'Username already exists' });
    }
    // Make sure password and confirmation match
    if (password !== passwordC) {
        return res.status(401).json({ message: 'Password and confirmation do not match' });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user object
    const newUser = {
        id: users.length + 1,
        username,
        password: hashedPassword
    };
    // Add the new user to the users array
    users.push(newUser);
    return res.status(200).json({ message: 'Account created successfully' });
});

app.post('/createProject', async (req, res) => {
    //TODO: Add functionality
    return res.status(200).json({ message: 'project created successfully' });
});

// Starts server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));