import  client from '../../utils/db.js'

export default defineEventHandler((event) => {
    let query = client.query('SELECT * from game order by create_time');
    return query
})
