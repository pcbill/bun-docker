import  client from '../../utils/db.js'

export default defineEventHandler(async (event) => {
    const q = await getQuery(event)
    if (q.gid) {
        let s = "DELETE from game WHERE gid = '"+ q.gid +"'";
        const query = client.query(s);
        return query
    }
})
