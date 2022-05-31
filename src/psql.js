const { Pool } = require('pg');
const {db} = require('./config');

const pool = new Pool({
    connectionString: db.uri,
    ssl: {
        rejectUnauthorized: false,
    },
})

module.exports = {
    pool
}