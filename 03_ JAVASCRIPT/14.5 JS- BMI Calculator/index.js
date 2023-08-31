/*
bmi = weight / (height * height)
*/

function getBmi (weight, height) {
    const bmi = bmiCalculate(weight, height);
    alert("Your BMI is " + bmi);
  } //calls function that contains bmi calculation formula and outputs the BMI  as an alert

  
function bmiCalculate (weight, height) {
    return weight/Math.pow(height, 2); //method to get square
  } //Function that calculates bmi

getBmi(parseFloat(prompt("Enter weight in kg")), parseFloat(prompt("Enter height in metres"))); // gives arguments to the function via a prompt