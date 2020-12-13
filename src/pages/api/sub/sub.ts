//
// API
//  run on server side
//
export default function handler(_req, res) {
  //console.log(process.env);
  //const host = process.env.HOSTNAME;

  //const env = process.env.NODE_ENV;
  const env = process.env.TEST_VAR;
  const nowDate = Date();
  const nowStr = 'nowStr:' + nowDate;
  console.log('API NODE_ENV=%s now=%s', env, nowDate, nowStr);
  res.send('nodeEnv=' + env + ', ' + nowStr);
}