import  client from '../../utils/db.js'

export default defineEventHandler(async (event) => {
    const q = await getQuery(event)
    if (q.uid) {
        let s = "SELECT * from person " +
            "  left join game g on person.award_game_id = g.gid::int " +
            " where uid like '%"+ q.uid +"%' order by uid ";
        const query = client.query(s);
        return query
    } else if (q.uname) {
        let s = "SELECT * from person " +
            "  left join game g on person.award_game_id = g.gid::int " +
            " where name like '%"+ q.uname +"%' order by uid";
        const query = client.query(s);
        return query
    }
})
