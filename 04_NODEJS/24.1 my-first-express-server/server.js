const express = require("express");

const app = express();

app.get("/", function(req, res){ //Handling requests and GET responses
    console.log(req); 
    res.send("Hello World");
})

app.get("/about-me", function(req, res){
    console.log(req);
    res.send("<h1>Hey there, my name is Joseph Temesi and this is my first express server.</h2>");
})

app.listen(8054, function(){
    console.log("Server started on port: 8054");
})