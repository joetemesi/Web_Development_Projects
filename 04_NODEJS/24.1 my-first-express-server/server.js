const express = require("express");

const app = express();

app.get("/", function(req, res){ //Handling requests and GET responses
    console.log(req); 
    res.send("Hello World");
})

app.listen(8054, function(){
    console.log("Server started on port: 8054");
})