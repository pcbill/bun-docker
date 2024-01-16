import  client from '../../utils/db.js'

export default defineEventHandler(async (event) => {
    const q = await getQuery(event)

    const query = client.query('SELECT * from person ' +
        ' left join game g on person.award_game_id = g.gid::int ' +
        ' where award_game_id = '+q.gid+' order by award_time desc ');
    return query
})
