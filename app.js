const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
  console.log(req.body.bacon);
});

app.listen(3000,function(){
  console.log("Server running on port 3000");
});
