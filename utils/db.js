import pg from "pg";

const client = new pg.Client({
    user: '',
    host: 'localhost',
    database: 'postgres',
    password: '',
    port: 5432, // Default PostgreSQL port
})

client.connect()

export default client
