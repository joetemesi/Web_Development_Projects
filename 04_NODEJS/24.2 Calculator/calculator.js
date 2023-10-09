const express = require("express");

const app = express();

app.get("/", function (req, res) {
    res.send(`
        <h1>Calculator</h1>
        <form action="/calculate" method="post">
            <!-- First Input Field -->
            <input type="text" id="number1" name="number1" required placeholder="First Number Here">
            
            <!-- Second Input Field -->
            <input type="text" id="number2" name="number2" required placeholder="Second Number Here"> </br> </br>

            <!-- Calculate Button -->
            <input type="submit" value="Calculate">
        </form>
    `);
      
})

app.listen(3000, function(){
    console.log("Server started on port: 3000");
})