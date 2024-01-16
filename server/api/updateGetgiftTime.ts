import  client from '../../utils/db.js'

export default defineEventHandler(async (event) => {
    const q = await getQuery(event)

    const query = client.query("UPDATE person SET getgift_time = NOW() WHERE uid = '"+ q.uid +"'");
    return query
})
