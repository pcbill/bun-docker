import  client from '../../utils/db.js'

export default defineEventHandler(async (event) => {
    const q = await getQuery(event)
    if (q.uid && q.gid) {

        let cancelAwardSql = "UPDATE person SET award_game_id = null, award_time = null WHERE uid = '"+ q.uid +"'";
        client.query(cancelAwardSql);

        let updateGameSql:string = "UPDATE game SET played_time = NOW(), reminder_count = reminder_count + 1 WHERE gid = '"+q.gid+"'";
        client.query(updateGameSql);

        return
    }
})
