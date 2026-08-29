console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// MongoDb chaqirish
const db = require("./server").db();

// Section 1 Kirish Code

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Section 2 : Session

// Section 3: Views code( Backend da front end yasaymiz)

app.set("views", "views");
app.set("view engine", "ejs");

// Section 4: Routing

app.post("/add-item", function (req, res) {
  console.log(req.body);
  res.send({ test: "sucess" });
});

app.get("/", function (req, res) {
  res.render("reja");
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

module.exports = app;
