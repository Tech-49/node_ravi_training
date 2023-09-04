const underscore = require("underscore");

const numbers = [1, 2, 3, 4, 5, 6];
var even = underscore.find(numbers, function (num) { return num % 2 == 0; });
console.log(even);

// 20 function

// const result = numbers.find(function (num) { if (num % 2 == 0) { return num; } });
// console.log(result);