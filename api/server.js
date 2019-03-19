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
            res.status(400).json({ error: `User with that id doesn't exists` })
        }
    } catch(err) {
        res.status(500).json({ error: 'Database error' })
    }
})

server.post('/api/users/create', async (req, res) => {
    try {
        const Data = req.body

        if(Data.name && Data.food_handling_license && Data.user_type) {
            const result = await users.insert(Data)
            res.status(201).json({message: `${Data.name} added to the database`})
        } else {
        res.status(422).json({ error: 'Missing data' })
        }
    } catch(err) {
        res.status(500).json({ error: 'Dtabase error' })
    }
})

server.put('/api/users/:id', async (req, res) => {
    try {
        const Data = req.body
        const { id } = req.params
        //console.log(id)

        if(Data.name || Data.food_handling_license || Data.user_type) {
            const array = await users.update(id, Data)
            //console.log(Data)
            res.status(200).json({ message: `The id # ${id} has been edited`})
        } else {
            res.status(422).json({ error: 'Missing required fields' })
        }
    } catch(err) {
        res.status(500).json({ error: 'Database error' })
    }
})

server.delete('/api/users/:id', async (req, res) => {
    try {
        const { id } = req.params

        if(id) {
            const result = await users.remove(id)
            res.status(200).json({ message: `User with id# ${id} successfuly deleted` })
        } else {
            res.status(404).json({ error: `User doesn't exist` })
        }
    } catch(err) {
        res.status(500).json({ message: `Database error` })
    }
})





configureRoutes(server);

module.exports = server;
