import * as dotenv from 'dotenv'
import pkg from 'pg';

dotenv.config()
const { Client } = pkg;

const client = (() => {
    if (process.env.NODE_ENV === 'production') {
        console.log(process.env.NODE_ENV)
        return new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: {
                rejectUnauthorized: false
            }
        });
    } else {
        return new Client({
            user : process.env.DB_USER,
                password : process.env.DB_PASSWORD,
                host : process.env.DB_HOST,
                port : 5432,
                database: process.env.DB_NAME, 
        });
    }
})();

export default client;