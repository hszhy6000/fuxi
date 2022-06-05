const express = require("express");
const router = express.Router();

router.use(function (req, res, next) {
  console.log("我是路由级别中间件");
  next();
});
router.get("/", function (req, res) {
  res.send("访问了/");
});
router.get("/user", function (req, res) {
  res.send("访问了user");
});
module.exports = router;
