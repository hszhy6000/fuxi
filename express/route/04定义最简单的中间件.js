const express = require("express");
const app = express();

// 定义最简单的中间件
const mw = function (req, res, next) {
  console.log("我是中间件1");
  req.time = Date.now();
  next();
};

const mw2 = function (req, res, next) {
  req.b = 111;
  console.log("我是中间件2");
  next();
};
app.use(mw);
app.use(mw2);
app.get("/", function (req, res) {
  console.log(req.time);
  res.send("ok " + req.time);
});
app.post("/", function (req, res) {
  console.log("/ post");
  console.log(req.time);

  res.send("post");
});

app.listen(80, () => {
  console.log("http://127.0.0.1");
});
