const { Pool } = require('pg');

const localDatabase = {
    user: 'admin',
    password: 'admin',
    database: process.env.database,
    host: process.env.host,
    port: process.env.port || 5432
}

const pool = new Pool(localDatabase);

module.exports = pool;

