const express = require("express");

const app = express();

const port = 3000;

const https = require("https");


app.get("/", function(req, res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=melbourne&units=metric&appid="

    https.get(url, function(response) {
        // console.log(response);
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description

            console.log(description);
            console.log(temp);
            // console.log(weatherData);
        })
    })
    

    res.send("Welcome to my weather app");
})






app.listen(port, function(){
    console.log("Server started on Port: " + port);
})