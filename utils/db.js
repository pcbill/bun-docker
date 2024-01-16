import pg from "pg";

const client = new pg.Client({
    user: 'npust',
    host: 'dpg-ceopn5da4991ihh644p0-a',
    database: 'mydb_qyjo',
    password: 'da1SVS3RLaXI8LTmsrhZBFnOZRqa8xXA',
    port: 5432, // Default PostgreSQL port
})

client.connect()

export default client
