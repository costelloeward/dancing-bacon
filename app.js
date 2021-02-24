const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  console.log(req.body.bacon);
  const answer = req.body.bacon;
  if (answer === "yes") {
    app.get("/yes", function(req, res) {
      res.sendFile(__dirname + "/yes.html");
    });
  } else if (answer === "no") {
    app.get("/no", function(req, res) {
      res.sendFile(__dirname + "/no.html");
    });
  } else {
    app.get("/other", function(req, res) {
      res.sendFile(__dirname + "/other.html");
    });
  }
});

app.listen(3000, function() {
  console.log("Server running on port 3000");
});
