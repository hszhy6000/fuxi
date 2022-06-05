const express = require("express");
const app = express();

//定义全局的中间件
let content = "";
const wm = function (req, res, next) {
  req.startTime = Date.now();
  next();
};

const wm1 = function (req, res, next) {
  content += " 中间件1";
  next();
};
const wm2 = function (req, res, next) {
  content += " 中间件2";
  next();
};
app.use(wm);
app.get("/", [wm1, wm2], function (req, res) {
  res.send("收到了 get 请求 " + req.startTime + content);
  content = "";
});
app.get("/user", function (req, res) {
  res.send("/user  " + req.startTime);
});
app.listen(80, () => {
  console.log("http://127.0.0.1 正在运行");
});
