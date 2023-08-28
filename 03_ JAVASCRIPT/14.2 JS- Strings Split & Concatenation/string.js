var name = prompt("What is your name? "); // takes in input from user and assigns it to variable

var nameSlice = name.slice(0,1); // slices first character from rest of string

nameSlice = nameSlice.toUpperCase(); // converts sliced character to Upper case

var lowerCaseName = name.slice(1,1000000); // takes the string less the first character

lowerCaseName = lowerCaseName.toLowerCase(); //converts remaining string to lowercase

alert ("Hello " + nameSlice + lowerCaseName); // camelcase output

