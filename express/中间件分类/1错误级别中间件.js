const express = require("express");
const app = express();

app.get("/", function (req, res) {
  console.log("使用了 get");
  throw new Error("创建了错误");
  res.send("使用了get");
});
app.use(function (err, req, res, next) {
//   console.log(err);
  res.send(err.message);
});
app.listen(8080, () => {
  console.log("服务器运行 http://127.0.0.1");
});
