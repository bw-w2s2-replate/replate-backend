const express = require('express');
const server = express();
const cors = require('cors');
const helmet = require('helmet');

server.use(express.json());
server.use(helmet());
server.use(cors());

const configureRoutes = require('../config/routes.js');

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Server is working!' })
})

configureRoutes(server);

module.exports = server;
