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

app.get("/no", function(req, res) {
  res.sendFile(__dirname + "/public/no.html");
});
app.get("/yes", function(req, res) {
  res.sendFile(__dirname + "/public/yes.html");
});
app.get("/other", function(req, res) {
  res.sendFile(__dirname + "/public/other.html");
});

app.post("/", function(req, res) {

  const answer = (String(req.body.bacon)).toLowerCase();
  console.log(answer);

  if (answer === "yes") {

    res.redirect("/yes");

  } else if (answer === "no") {
    res.redirect("/no")
  } else {

    res.redirect("/other");

  }

});

app.listen(3000, function() {
  console.log("Server running on port 3000");
});
