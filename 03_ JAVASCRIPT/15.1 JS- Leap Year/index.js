function isLeapYr (year) {
    if ((year % 4) !== 0) { //Checks whether year is perfectly divisible by 4
        alert("The year " + year + " is NOT a leap year.");
    } else if ((year % 100) !== 0){ //Checks whether year is perfectly divisible by 100
        alert("The year " + year + " is a leap year.");
    } else if ((year % 400) !== 0 ) { //Checks whether year is perfectly divisible by 400
        alert("The year " + year + " is NOT a leap year.");
    } else {
       alert("The year " + year + " is a leap year."); 
    }      
} //Checks whether a given year is leap or not
    
isLeapYr(prompt("Enter the year")); 