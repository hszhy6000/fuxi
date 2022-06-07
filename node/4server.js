const http = require("http");
const server = http.createServer();
server.on("request", function (req, res) {
  let url = req.url;
  let content = "404 not found";
  if (url === "/" || url === "/index.html") {
    content = "11首页";
  } else if (url === "/about.html") {
    content = "关于";
  }
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  res.end(content);
});
server.listen(80, () => {
  console.log("server is running at http://127.0.0.1");
});
