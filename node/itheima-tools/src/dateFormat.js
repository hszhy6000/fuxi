// 这是包的入口文件
function dateFormat(dtSrt) {
  const dt = new Date(dtSrt);
  const y = dt.getFullYear();
  const m = padZero(dt.getMonth() + 1);
  const d = padZero(dt.getDate());
  const hh = padZero(dt.getHours());
  const mm = dt.getMinutes();
  const ss = dt.getSeconds();
  let str = ` ${y}年${m}月${d}日  ${hh}:${mm}:${ss}  `;
  return str;
}
function padZero(n) {
  return n < 10 ? "0" + n : n;
}

module.exports = {
  dateFormat,
};
