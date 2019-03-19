const express = require('express');
const server = express();
const cors = require('cors');
const helmet = require('helmet');
const users = require('../models/usersModel.js');

server.use(express.json());
server.use(helmet());
server.use(cors());

const configureRoutes = require('../config/routes.js');

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Server is working!' })
})

server.get('/api/users/all', async (req, res) => {
    try {
        const result = await users.getAll()
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({ error: 'Database error' })
    }
})


configureRoutes(server);

module.exports = server;
