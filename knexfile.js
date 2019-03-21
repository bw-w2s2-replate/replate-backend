// Update with your config settings.

require('dotenv').config();

module.exports = {
    development: {
        client: 'sqlite3',
        connection: {
            filename: './data/replate.sqlite3'
        },
        useNullAsDefault: true,
        migrations: {
            tableName: 'knex_migrations',
            directory: './data/migrations'
        },
        seeds: {
            directory: './data/seeds'
        }
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        useNullAsDefault: true,
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: './data/migrations'
        },
        seeds: {
            directory: './data/seeds'
        }
    }
};
