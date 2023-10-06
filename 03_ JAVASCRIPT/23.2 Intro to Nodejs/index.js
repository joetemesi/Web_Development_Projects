//jshint esversion:6

const fs = require("fs");

// fs.copyFile("game.js", "backupgame.js", (err) => {
//     if (err) {
//       console.error("Error copying file:", err);
//     } else {
//       console.log("File copied successfully.");
//     }
//   }); //method 1

fs.copyFileSync("game.js","backupgame.js"); /// method 2
