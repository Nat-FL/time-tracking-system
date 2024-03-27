const express = require('express');
const cors = require("cors")
const morgan = require("morgan")
const path = require('path');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const userRoutes = require("./routes/users");
const app = express();

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

app.get('/profile', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
})

app.get('/passwordchange', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
})

app.get('/passwordconfirm', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
})

app.use(bodyParser.json());

// Login route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);
    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }
    try {
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
//TODO: add database functionality once database is created
app.post('/createAdmin', async (req, res) => {
    const {username, password, passwordC, client} = req.body;
    //this function should check the database to see if client exists among existing users
    //TODO: account should only be created if client is not already existing in database
    //for now lets just assume that the client is not found
    clientInDatabase = false;
    if(clientInDatabase) {
        return res.status(401).json({ message: 'Client already exists' });
    }
    //make sure password and confirmation match
    if(password != passwordC) {
        return res.status(401).json({message: 'Password and confirmation do not match!'});
    }

    //TODO: actually add account to the database
    return res.status(200).json({message: 'admin created sucessfuly'});
})

app.post('/changepassword', async (req, res) => {
    const {passwordOld, password, passwordC} = req.body;
    //TODO: make sure old password matches
    if(password != passwordC){
        return res.status(401).json({ message: 'password confirm does not match' });
    }
    if(password == passwordOld){
        return res.status(401).json({ message: 'Password is same as old'});
    }
    //TODO: change password in database
    return res.status(200).json({message: 'password changed sucessfuly'});
})

// Starts server
//backend server initially set to 5000, want to try 3000 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));