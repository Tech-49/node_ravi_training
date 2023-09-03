const fs = require("fs")

console.log("Before")
let result = fs.readFileSync("readme.txt", { encoding: 'utf8' })
console.log(result)
console.log("After")


console.log("Before")
fs.readFile("readme.txt", { encoding: 'utf8' }, function (err, result) {
    console.log(result)
})
console.log("After")
