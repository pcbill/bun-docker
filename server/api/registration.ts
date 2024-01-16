import  client from '../../utils/db.js'

export default defineEventHandler(async (event) => {
    const q = await getQuery(event)

    const query = client.query("SELECT * from person " +
        " where registration_time is not null " +
        " order by registration_time desc ");
    return query
})
