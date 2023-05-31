// BEGIN
export default function solution(Url) {
  const userAgent = navigator.userAgent;
  const browserInfo = userAgent.match(/Mozilla\/\d+\.\d+/)[0];
  return `${browserInfo} ${Url}`;
}
// END
