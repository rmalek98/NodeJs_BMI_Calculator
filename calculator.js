
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

  var num1 = Number(req.body.num1); //using the Number() to change the inside data to numbers
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("the result is " + result );
});

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmicalculator", function(req, res){
  var h = parseFloat(req.body.h);
  var w = parseFloat(req.body.w);
  var result =  w/(h*h);
  res.send("the result is " + result);
});

app.listen(3000, function(){
  console.log("sever started at port 3000");
});
