function isLeapYr (year) {
    if ((year % 4) !== 0) {
        alert("The year " + year + " is NOT a leap year.");
    } else if ((year % 100) !== 0){
        alert("The year " + year + " is a leap year.");
    } else if ((year % 400) !== 0 ) {
        alert("The year " + year + " is NOT a leap year.");
    } else {
       alert("The year " + year + " is a leap year."); 
    }      
}
    
isLeapYr(prompt("Enter the year"));