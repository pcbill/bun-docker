import  client from '../../utils/db.js'

export default defineEventHandler(async (event) => {
    const q = await getQuery(event)
    console.log(q.gid)
    if (q.gid) {
        let s = "SELECT * from person " +
            // "  left join game g on person.award_game_id = g.gid::int " +
            " where award_game_id = '"+ q.gid +"' " +
            " order by award_time desc ";
        const query = client.query(s);
        console.log(query)
        return query
    }
})
