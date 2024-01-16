import  client from '../../utils/db.js'

export default defineEventHandler(async (event) => {
    const q = await getQuery(event)
    if (q.uids) {
        for (let i = 0; i < q.uids.length; i++) {
            const uid = q.uids;
            if (uid && q.gid) {
                client.query("UPDATE person SET award_game_id = '"+q.gid+"', award_time = NOW() WHERE uid = '"+uid+"'");
            }
        }
    }
})
