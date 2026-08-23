console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

// Section 1

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Section 2 : Session

// Section 3: Views code( Backend da front end yasaymiz)

app.set("views", "views");
app.set("view engine", "ejs");

// Section 4: Routing

// localhost:3000/hello

app.get("/hello", function (req, res) {
  res.end(`<h1>Hello world </h1>`);
});

// localhost:3000/gift

app.get("/gift", function (req, res) {
  res.end(`<h1 style = "background:red" >Siz sovg'alar bo'limidasiz </h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is working at localhost: ${PORT}`);
});
