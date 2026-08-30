const http = require("http");
const mongodb = require("mongodb");
require("dotenv").config();

let db;
const connectionString = process.env.MONGO_URI;

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is working at localhost: ${PORT},http://localhost:3000`
        );
      });
    }
  }
);
