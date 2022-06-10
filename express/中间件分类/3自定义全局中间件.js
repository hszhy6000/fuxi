const express = require("express");
const qs = require("querystring");
const app = express();
app.use((req, res, next) => {
  let str = "";
  // 监听 req.on 事件
  req.on("data", (chunk) => {
    str += chunk;
  });
  req.on("end", () => {
    console.log(qs.parse(str));
    req.body = qs.parse(str);
    next();
  });
});
app.get("/", (req, res) => {
  res.send("ok get");
});
app.post("/user", (req, res) => {
  res.send(req.body);
});
app.listen(80, () => {
  console.log("http://127.0.0.1");
});
