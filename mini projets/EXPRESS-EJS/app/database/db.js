import pg from 'pg';
import * as dotenv from 'dotenv';

dotenv.config();

// const client = new pg.Client();

const client = new pg.Client({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: 5432, // Par défaut le port de PostgreSQL est 5432
});

client.connect();

export default client;