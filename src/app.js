var express = require("express");
var app = new express();


app.get("/",function (req,res){
    res.json({"message":"hellow affixus buddy....!!"});
});

app.listen("3000",function () {
    console.log("app starting on port 3000");
})