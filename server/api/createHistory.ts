import  client from '../../utils/db.js'

export default defineEventHandler(async (event) => {
    const q = await getQuery(event)
    if (q.gid && q.result) {
        let s = "INSERT INTO history(game_id, result) VALUES ('"+ q.gid +"', '"+ q.result +"')";
        client.query(s);
    }
})
