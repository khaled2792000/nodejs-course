// node js server with routing
const http = require("http");
const fs = require("fs");

const PAGES = "PAGES";

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      const content = fs.readFileSync(`./${PAGES}/hello.html`);
      res.writeHead(200, { "Content-Type": "text/html" });
      return res.end(content);
    }
    if (req.url === "/about") {
      const content = fs.readFileSync(`./${PAGES}/about.html`);
      res.writeHead(200, { "Content-Type": "text/html" });
      return res.end(content);
    }
    if (req.url === "/contact") {
      const content = fs.readFileSync(`./${PAGES}/contact.html`);
      res.writeHead(200, { "Content-Type": "text/html" });
      return res.end(content);
    }
  }
  if (req.method === "POST") {
    fs.writeFileSync("hello.html", "Hello from Node.js");
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end("File saved");
  }
});

server.listen(9999, () => {
  console.log("Server running at port 9999");
});
