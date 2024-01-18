import pg from "pg";

const client = new pg.Client({
    user: 'npust',
    host: 'dpg-ceopn5da4991ihh644p0-a.oregon-postgres.render.com',
    database: 'mydb_qyjo',
    password: 'da1SVS3RLaXI8LTmsrhZBFnOZRqa8xXa',
    port: 5432, // Default PostgreSQL port
    ssl: true
})

// const client = new pg.Client({
//     user: '',
//     host: 'localhost',
//     database: 'postgres',
//     password: '',
//     port: 5432, // Default PostgreSQL port
// })

client.connect()

export default client
