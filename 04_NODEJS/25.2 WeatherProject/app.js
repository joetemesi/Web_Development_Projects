const express = require("express");

const app = express();

const port = 3000;

const https = require("https");


app.get("/", function(req, res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=kAKAMEGA&units=metric&appid="

    https.get(url, function(response) {
        // console.log(response);
        console.log(response.statusCode);

        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description
            const city = weatherData.name;
            const country = weatherData.sys.country;
    

            console.log(description);
            console.log(temp);
            // console.log(weatherData);
            // res.send(`
            // <h1>The temperature of ${city} in ${country} is ${temp} °C</h1>
            // <h2>The weather is currently ${description}</h2>
            // `);

            res.write(`<p>The weather is currently ${description}</p>`);
            res.write(`<h1>The temperature of ${city} in ${country} is ${temp} ° C </h1>`);
            res.send();
        })
    })
    

    
})






app.listen(port, function(){
    console.log("Server started on Port: " + port);
})