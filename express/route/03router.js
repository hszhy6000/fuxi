// 这是路由模块
const express = require("express");
const router = express.Router();
router.get("/user/list", function (req, res) {
  res.send(`请求的是 ${req.url} 接口`);
});
router.get("/user/add", (req, res) => {
  res.send(`请求的是 ${req.url} 接口`);
});
module.exports = router;
