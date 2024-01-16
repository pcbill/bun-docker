import  client from '../../utils/db.js'

export default defineEventHandler(async (event) => {
    const q = await getQuery(event)
    let s:string = "SELECT * from person where registration_time is not null AND award_time is null";
    const query = client.query(s);
    return query
})
