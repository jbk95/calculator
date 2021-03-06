const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
//var url8 = bodyParser.urlencoded({extended: true});

app.get("/", function(req,res){
  res.sendFile(__dirname +"/index.html");
});

app.get("/bmiCalculator", function(req,res){
  // res.sendFile(__dirname +"/index.html");
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/index",function (req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("<h1>Result: " + result + " </h1>");
});

app.post("/bmiCalculator",function (req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 / Math.pow(num2,2);
  res.send("<h1>Result: " + result + " </h1>");
});

app.listen(3000, function (){
  console.log("Server started on port 3000");
});
