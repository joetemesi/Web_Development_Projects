//jshint esversion:6

var superheroes = require("superheroes"); 
const supervillains = require("supervillains"); //initialize package

var testSuperHero = superheroes.random();
var testSuperVillain = supervillains.random();

console.log(testSuperHero);
console.log(testSuperVillain); //log to console

//const fs = require("fs");

// fs.copyFile("game.js", "backupgame.js", (err) => {
//     if (err) {
//       console.error("Error copying file:", err);
//     } else {
//       console.log("File copied successfully.");
//     }
//   }); //method 1

//fs.copyFileSync("game.js","backupgame.js"); /// method 2
