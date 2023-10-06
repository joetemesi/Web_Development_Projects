//jshint esversion:6

var superheroes = require("superheroes"); 
var testSuperHero = superheroes.random();
console.log(testSuperHero);
//const fs = require("fs");

// fs.copyFile("game.js", "backupgame.js", (err) => {
//     if (err) {
//       console.error("Error copying file:", err);
//     } else {
//       console.log("File copied successfully.");
//     }
//   }); //method 1

//fs.copyFileSync("game.js","backupgame.js"); /// method 2
