function addition (num1,num2) {
    return num1 + num2;
}

function subtraction (num1,num2) {
    return num1 - num2;
}

function multiplication (num1,num2) {
    return num1 * num2;
}

function division (num1,num2) {
    return num1 / num2;
}

function calculator (num1,num2,operator) {
    var result = operator(num1,num2);
    result = parseFloat(result.toFixed(2));
    return result;
}

calculator (2,3.5,multiplication);