function getBmi (weight, height) {
    const bmi = bmiCalculate(weight, height);
    alert("Your BMI is " + bmi);
  }

  
function bmiCalculate (weight, height) {
    return weight/Math.pow(height, 2); 
  }

getBmi(parseFloat(prompt("Enter weight in kg")), parseFloat(prompt("Enter height in metres")));