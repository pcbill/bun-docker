import  client from '../../utils/db.js'

export default defineEventHandler(async (event) => {
    const q = await getQuery(event)
    if (q.gid && q.award_list && q.participant_count && q.type) {
        let s = "INSERT INTO game(gid, award_list, participant_count, reminder_count, exec_type) VALUES(" +
            "'"+q.gid+"', '"+q.award_list+"', "+q.participant_count+", "+q.participant_count+", "+ q.type +
            ")";
        const query = client.query(s);
        return query
    }
})
