const fs = require("fs");

const content = fs.readFileSync("./MyDirectory/hello.html");
fs.writeFileSync("hello.html", "Hello from Node.js");
fs.mkdirSync("MyDirectory");
