//Server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { connect, client } = require('./db');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(express.static(path.join(__dirname, '..', 'client', 'public')));
app.use(cors());
app.use(bodyParser.json());

connect();

app.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const db = client.db('mern');
        const collection = db.collection('users');

        const user = await collection.findOne({ email, password });

        if (user) {
            console.log('User authenticated successfully');
            console.log('Redirecting to hello.html');
            res.sendFile(path.join(__dirname, '..', 'client', 'public', 'hello.html'));
        } else {
            console.log('User not found');
            res.status(404).send({ message: 'User not found' });
        }
    } catch (err) {
        console.error('Error authenticating user:', err);
        res.status(500).send({ message: 'Error authenticating user' });
    }
});

app.post('/signup', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    console.log(`Received login request for email: ${email} and password: ${password}`);
    try {
        const db = client.db('mern'); // Specify your database name
        const collection = db.collection('users'); // Specify your collection name

        await collection.insertOne({ email, password });
        console.log('User saved to MongoDB');
        res.send({ message: "User saved successfully" });
    } catch (err) {
        console.error('Error saving user to MongoDB:', err);
        res.status(500).send({ message: "Error saving user" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
