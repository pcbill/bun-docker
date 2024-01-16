import  client from '../../utils/db.js'

export default defineEventHandler(async (event) => {
    const q = await getQuery(event)
    if (q.uid) {
        let s = "UPDATE person SET registration_time = NOW() WHERE uid = '"+ q.uid +"'";
        const query = client.query(s);
        return query
    } else if (q.uname) {
        let s = "UPDATE person SET registration_time = NOW() WHERE name = '"+ q.uname +"'";
        const query = client.query(s);
        return query
    }
})
