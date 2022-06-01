const http=require("http");
const server=http.createServer();
server.on("request",(req,res)=>{
    console.log(req)
    console.log(res)
})
console.log(server)