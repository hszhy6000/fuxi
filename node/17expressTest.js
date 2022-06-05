const express = require("express");
const app = express();
app.use(express.static("public"));
app.get("/", function (req, res) {
  console.log("请求了 /");
  //   res.setHeader("content-type", "text/html;charset=utf8");
  res.send("首页");
});
app.get("/user", (req, res) => {
  //   console.log(req.query);
  console.log(req.url);
  res.send(req.query);
});
app.get("/user/:id/:age", (req, res) => {
  console.log(req.params);
  res.send(req.params);
});
app.post("/", function (req, res) {
  console.log("post");
  res.send("/ post ");
});

app.listen(80, () => {
  console.log("http://127.0.0.1 is running ");
});
