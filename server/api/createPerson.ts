import  client from '../../utils/db.js'

export default defineEventHandler(async (event) => {
    const q = await getQuery(event)
    if (q.uid && q.name && q.table_num) {
        let s = "INSERT INTO person(uid, name, table_num, registration_time) " +
            " VALUES('"+q.uid+"', '"+q.name+"', "+q.table_num+", NOW())";
        const query = client.query(s);
        return query
    }
})
