import  client from '../../utils/db.js'

export default defineEventHandler((event) => {
    let re = client.query('SELECT * from person where registration_time is not null ' +
        ' AND award_time is null ' +
        ' order by registration_time desc ')
    return re;
})
