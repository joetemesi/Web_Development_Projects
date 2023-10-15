const express = require("express");

const app = express();

const port = 3000;

const https = require("https");


app.get("/", function(req, res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=nairobi&appid=5ad247cde900dd2152841f32aae8ba46&units=metric"

    https.get(url, function(response) {
        console.log(response);
    })

    res.send("Welcome to my weather app");
})






app.listen(port, function(){
    console.log("Server started on Port: " + port);
})