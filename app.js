const express = require("express");
const app = express();
app.use(express.json());


app.get("/",function(req,res){
res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
  console.log(req.body.bacon);
});
