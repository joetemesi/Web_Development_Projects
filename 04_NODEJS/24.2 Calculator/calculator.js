const express = require("express");
const bodyParser = require("body-parser");  // Import body-parser

const app = express();

app.use(bodyParser.urlencoded({ extended: false })); // Handle the POST request to process the form data

app.get("/", function (req, res) {
    res.send(`
        <h1>Calculator</h1>
        <form action="/calculate" method="post">
            <!-- First Input Field -->
            <input type="text" id="number1" name="number1" required placeholder="First Number Here">
            
            <!-- Operator Input Field -->
            <input type="text" id="operator" name="operator" required placeholder=" Enter Operator Here">

            <!-- Second Input Field -->
            <input type="text" id="number2" name="number2" required placeholder=" Enter Operator Here">  </br> </br>

            <!-- Calculate Button -->
            <input type="submit" value="Calculate">
        </form>
    `);
      
})

app.post("/calculate", function(req, res){

    var firstNumber = parseFloat(req.body.number1); // Convert to a numeric type
    var secondNumber = parseFloat(req.body.number2);
    var operator = req.body.operator;
    console.log(`Operator entered: '${operator}'`); 

    if (operator == '+'){
        result = firstNumber + secondNumber;
    } else if (operator == '-') {
        result = firstNumber - secondNumber;
    } else if (operator == '*'){
        result = firstNumber * secondNumber;
    } else if (operator == '/'){
        result = firstNumber / secondNumber;
    } else {
        // Handle invalid operator here (e.g., display an error message)
        res.send("Invalid operator. Please use '+' or '-'");
        return; // Exit the function to avoid further processing
    }

    res.send(`The sum of the two numbers is: ${result}`); //interpolating stings using ``
})

app.listen(3000, function(){
    console.log("Server started on port: 3000");
})
