const {config} = require('dotenv');

config();

module.exports ={
    db: {
        uri: process.env.DATABASE_URL,
        
        // user: process.env.DB_USER,
        // password: process.env.DB_PASSWORD,
        // host: process.env.DB_HOST,
        // port: process.env.DB_PORT,
        // database: process.env.DB_NAME
    }
}