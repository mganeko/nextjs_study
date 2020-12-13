//
// page
//  run on client side
//  (also run on server side in dev mode, but override by client side)
//
export default function Index() {
  //const host = process.env.HOSTNAME;
  //const env = process.env.NODE_ENV;
  const env = process.env.TEST_VAR;
  const nowDate = Date();
  const nowStr = 'nowStr:' + nowDate;
  console.log('Page NODE_ENV=%s now=%s', env, nowDate, nowStr);
  return <h1>nodeEnv:{env}, {nowStr}</h1>;
}
