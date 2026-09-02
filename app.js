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
const mongodb = require("mongodb");

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
  console.log("user entered /add-item");
  console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    res.json(data.ops[0]);
  });
  res.send({ test: "sucess" });
});

app.post("/delete-item", (req, res) => {
  const id = req.body.id;
  console.log(id);
  db.collection("plans").deleteOne(
    { _id: new mongodb.ObjectId(id) },
    (err, data) => {
      res.json({ state: "sucess" });
     
    }
  );
});

app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("Something went wrong");
      } else {
        res.render("reja", { items: data });
      }
    });
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

module.exports = app;
