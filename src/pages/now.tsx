//
// page
//  run on client side
//  (also run on server side in dev mode, but override by client side)
//
export default function Index() {
    const host = process.env.HOSTNAME;
    const nowDate = Date();
    console.log('host=%s now=%s', host, nowDate);
    return <h1>Hello Host:{host} now:{nowDate}</h1>;
}