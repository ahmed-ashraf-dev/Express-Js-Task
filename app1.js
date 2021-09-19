const http = require("http");

const {index,info} = require("./app2")

http.createServer(function(req,resp){
if(req.url==="/")
    return index(req,resp);

if(req.url==="/info")
    return info(req,resp);

resp.write("Not Found");
resp.end();
}).listen(5000)