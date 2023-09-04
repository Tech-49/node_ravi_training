const { error } = require("console")
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


// console.log("good morning");
// let result1 = fs.readFileSync("hello.txt", { encoding: 'utf-8' })
// console.log(result1);
// console.log("good night");



// console.log("good morning");
// fs.readFile("hello.txt", { encoding: 'utf-8' }, functions(error, data){
//     console.log(data);
// })
// console.log("good night");