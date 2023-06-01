//convert the above code to express js
const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  const content = fs.readFileSync("./pages/hello.html");
  res.writeHead(200, { "Content-Type": "text/html" });
  return res.end(content);
});

app.get("/about", (req, res) => {
  const content = fs.readFileSync("./pages/about.html");
  res.writeHead(200, { "Content-Type": "text/html" });
  return res.end(content);
});

app.get("/contact", (req, res) => {
  const content = fs.readFileSync("./pages/contact.html");
  res.writeHead(200, { "Content-Type": "text/html" });
  return res.end(content);
});

app.post("/", (req, res) => {
  fs.writeFileSync("hello.html", "Hello from Node.js");
  res.writeHead(200, { "Content-Type": "text/html" });
  return res.end("File saved");
});

app.listen(9999, () => {
  console.log("Server running at port 9999");
});
