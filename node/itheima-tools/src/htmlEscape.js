// 定义转义html的字符函数
function htmlEscape(htmlstr) {
  // console.log(htmlstr);
  let placeReg = /<|>|"|&/g;
  return htmlstr.replace(placeReg, (match) => {
    switch (match) {
      case "<":
        return "&lt";
      case ">":
        return "&rt";
      case '"':
        return "&quot";
      case "&":
        return "&amp";
      default:
        return "无";
    }
  });
}
// 定义反义html
function htmlUnEscape(htmlstr) {
  let placeReg = /&lt|&rt|&quot|&amp/g;
  return htmlstr.replace(placeReg, (match) => {
    switch (match) {
      case "&lt":
        return "<";
      case "&rt":
        return ">";
      case "&quot":
        return '"';
      case "&amp":
        return "&";
    }
  });
}

module.exports = {
  htmlEscape,
  htmlUnEscape,
};
