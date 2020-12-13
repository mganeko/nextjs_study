export default function Index() {
  //const env = process.env.NODE_ENV;
  const env = process.env.TEST_VAR;

  const nowDate = Date();
  //const nowStr = 'nowStr:' + nowDate;
  const nowStr = getStr();

  console.log('Page NODE_ENV=%s now=%s', env, nowDate);

  return "hello ts env=" + env + ', ' + nowStr;
}

function getStr() {
  const nowDate = Date();
  const nowStr = 'nowStr:' + nowDate;
  return nowStr;
}
