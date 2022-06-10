const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extend: false }));
app.post("/user", (req, res) => {
  console.log("req.params", req.params);
  console.log(req.body);
  res.send(req.body);
});
app.use("/book", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});
app.listen(80, () => {
  console.log("http://127.0.0.1");
});
