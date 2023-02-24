import * as dotenv from 'dotenv'
import pkg from 'pg';

dotenv.config()
const { Client } = pkg;

const client = new Client({
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    host : process.env.DB_HOST,
    port : 5432,
    database: process.env.DB_NAME

})

export default client;