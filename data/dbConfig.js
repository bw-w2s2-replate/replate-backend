const knex = require('knex');
require('dotenv').config();

let dbEngine = 'development';
if (process.env.NODE_ENV === 'production') {
    dbEngine = 'production';
}

const knexConfig = require('../knexfile')[dbEngine];

module.exports = knex(knexConfig);
