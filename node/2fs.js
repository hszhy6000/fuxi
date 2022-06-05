const fs = require("fs");
// fs.readFile("./2.txt", "utf8", function (err, dataStr) {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(dataStr);
// });
let dataStr = "测试写入文件";
fs.writeFile("./3.txt", dataStr, function (err) {
  if (!err) {
    console.log("写入成功");
  }
});
