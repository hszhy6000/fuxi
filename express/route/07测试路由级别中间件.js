const express = require("express");
const router = require("./06路由中间件");
const app = express();
const wm = function (req, res, next) {
  console.log("我是全局的中间件");
  next();
};
app.use(wm);
app.use("/api", router);
app.listen(80, () => {
  console.log("http://127.0.0.1 运行中");
});
