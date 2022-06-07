// const dt = require("./15format");
const dt = require("./itheima-tools");
console.log(dt.dateFormat(new Date()));
const htmlStr = "<h1 title='abc'>这是一个h1标签</h1>";
console.log(dt.htmlEscape(htmlStr));
const htmlunStr = "&lt h1 title='abc'&rt这是一返转后的h1标签&lt/h1&rt";
console.log(dt.htmlUnEscape(htmlunStr));
