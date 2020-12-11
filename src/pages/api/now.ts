//
// API
//  run on server side
//
export default function handler(_req, res) {
    const host = process.env.HOSTNAME;
    const nowDate = Date();
    console.log('API host=%s now=%s', host, nowDate);
    res.send('host=' + host + ' now=' + nowDate);
}