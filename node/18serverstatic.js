const express = require("express");
const app = express();
//app.use 的作用是注册合局中间件
app.use("/images", express.static("./images"));
app.use(express.static("./public"));
app.get("/", (req, res) => {
  res.send("首页");
});
app.listen(80, () => {
  console.log("http://127.0.0.1 ");
});
