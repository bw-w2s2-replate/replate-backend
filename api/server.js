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

server.get('/api/users/:id', async (req, res) => {
    try { 
        const { id } = req.params
        const note = await users.findById(id)
        //console.log(note)
        if(note.length > 0) {
            res.status(200).json(note)
        } else {
            res.status(400).json({ error: `Data with that id doesn't exists` })
        }
    } catch(err) {
        res.status(500).json({ error: 'Database error' })
    }
})


configureRoutes(server);

module.exports = server;