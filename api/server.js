const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

const app = express();

app.use(express.json());

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

// Starts server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));