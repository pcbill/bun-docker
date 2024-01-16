import  client from '../../utils/db.js'

export default defineEventHandler(async (event) => {
    const q = await getQuery(event)
    if (q.uid) {
        let s = "SELECT * from person " +
            // "  left join game g on person.award_game_id = g.gid::int " +
            " where uid = '"+ q.uid +"'";
        const query = client.query(s);
        return query
    }
})
