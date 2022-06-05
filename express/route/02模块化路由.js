const express = require("express");
const app = express();
const router = require("./03router");
// app.use  是用来注册全局中间件
app.use("/api", router);
app.listen(80, () => {
  console.log("http://127.0.0.1");
});
