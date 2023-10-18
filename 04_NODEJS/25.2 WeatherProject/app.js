const { log } = require("console");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

const port = 3000;

const https = require("https");


app.get("/", function(req, res){

    res.sendFile(__dirname + "/index.html");  
})

app.post("/response", function(req, res){

    console.log(req.body.cityName);
    const appKey='';
    var cityQuery = req.body.cityName;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityQuery}&units=metric&appid=${appKey}`;

    https.get(url, function(response) {
        // console.log(response);
        console.log(response.statusCode);

        response.on("data", function(data){
            
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description
            const city = weatherData.name;
            const country = weatherData.sys.country;
            const icon = weatherData.weather[0].icon;
            const statusCode = weatherData.cod;

    

            console.log(description);
            console.log(temp);
            console.log(statusCode);
            // console.log(weatherData);
            // res.send(`
            // <h1>The temperature of ${city} in ${country} is ${temp} degree Celcius</h1>
            // <h2>The weather is currently ${description}</h2>
            // `);

            res.write(`<p>The weather is currently ${description}</p>`);
            res.write(`<h1>The temperature of ${city} in ${country} is ${temp} Degrees Celcius </h1>`);
            res.write(`<img src="https://openweathermap.org/img/wn/${icon}@2x.png">`);
            res.send();
        })
    })
})



app.listen(port, function(){
    console.log("Server started on Port: " + port);
})