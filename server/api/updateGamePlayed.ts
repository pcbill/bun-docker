import  client from '../../utils/db.js'

export default defineEventHandler(async (event) => {
    const q = await getQuery(event)
    if (q.reminderCount && q.gid) {
console.log("q.reminderCount "+q.reminderCount)
        client.query("UPDATE game SET played_time = NOW(), reminder_count = "+q.reminderCount+" WHERE gid = '"+q.gid+"'");
    }
})
