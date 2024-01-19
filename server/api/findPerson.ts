import  client from '../../utils/db.js'

export default defineEventHandler(async (event) => {
    const q = await getQuery(event)
    if (q.uid) {
        let s = "SELECT * from person " +
            " where uid = '"+ q.uid +"'";
        const query = client.query(s);
        return query
    }
})
