function dateFormat(dtSrt) {
  const dt = new Date(dtSrt);
  const y = dt.getFullYear();
  const m = dt.getMonth() + 1;
  const d = padZero(dt.getDate());
  const hh = padZero(dt.getHours());
  const mm = dt.getMinutes();
  const ss = dt.getSeconds();
  let str = ` ${y}年${m}月${d}日  ${hh}:${mm}:${ss}  `;
  return str;
}
function padZero(n) {
  console.log(n);
  return n < 10 ? "0" + n : n;
}
module.exports = {
  dateFormat,
};
