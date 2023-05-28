const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Hello Ruppin!");
  })
  .listen(9999, () => {
    console.log("Server running at port 9999");
  });
