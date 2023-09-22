const fs = require("ravi"); // File System
// ravi

// NPM - Node Package Manager
// package.json - 10, underscore, a, b,c,d

// console.log("Before")
// const result = fs.readFileSync("readme.txt", { encoding: 'utf8' });
// console.log(result);
// console.log("AFTER")

console.log("Before");
fs.readFile("readme.txt", { encoding: 'utf8' }, function (err, result) {
    if (err) {
        console.log("Something went wrong, unable to read file.");
    }
    else {
        console.log(result);
    }
});
console.log("After");