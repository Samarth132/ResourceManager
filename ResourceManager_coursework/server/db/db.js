const Pool = require('pg').Pool

const pool = new Pool({
    user: 'samarth',
    password: 'samarth123',
    host: 'localhost',
    port: 5432,
    database: 'resourceManager'
})

module.exports = pool