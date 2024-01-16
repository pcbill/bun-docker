import  client from '../../utils/db.js'

export default defineEventHandler(async (event) => {
    const q = await getQuery(event)

    let sl:string = 'SELECT * from game ';
    if (q.gid) {
        sl += " WHERE gid = '" + q.gid + "'";
    }
    sl += " order by create_time ";

    const query = client.query(sl);
    return query
})
