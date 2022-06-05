const express = require("express");

const app = express();
app.get("/", (req, res) => {
  console.log(req.url);
  res.send("首页");
});
app.listen(80, () => {
  console.log("http://127.0.0.1 is running");
});
