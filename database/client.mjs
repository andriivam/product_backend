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
            user : process.env.USER,
                password : process.env.PASSWORD,
                host : process.env.HOST,
                port : 5432,
                database: process.env.DATABASE, 
            ssl: false
        });
    }
})();

export default client;