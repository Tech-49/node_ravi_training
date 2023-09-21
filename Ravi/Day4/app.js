const underscore = require("underscore");

/*// 1.find//
const numbers = [1, 2, 3, 4, 5, 6];
let even = underscore.find(numbers, function (num) { return num % 2 == 0; });
console.log(even);*/

/*
// 2.fillter //
const num = [1, 2, 3, 4, 5, 6];
let evens = underscore.filter(num, function (num) { return num % 2 == 0; });
console.log(evens);*/


// 3.where //
/*let timeTable = [
    { subject: 1, sName: "python", lecturer: "hardik" },
    { subject: 2, sName: "node", lecturer: "ravi" },
    { subject: 3, sName: "php", lecturer: "john" },
    { subject: 4, sName: "node", lecturer: "raviya" }
];
getMysubject = underscore.where(timeTable, { sName: "node" },);
console.log(getMysubject);*/

/*
// 4.reject //
let rejectNumber = [1, 2, 3, 4, 5, 6];
let odds = underscore.reject(rejectNumber, function (num) { return num % 2 == 0; });
console.log(odds);*/

/*
// 5.every //
let getNumbers = [2, 4, 6];
let result = underscore.every(getNumbers, function (num) { return num % 2 == 0; });
console.log(result);*/


// 6.contains //
const anyNumber = [1, 2, 3, 4, 5, 6, 7];
let result = underscore.contains(anyNumber, 7);
console.log(result)

/*
// 7.pluck //
const stooges = [{ name: 'hardik', age: 40 }, { name: 'ravi', age: 50 }, { name: 'john', age: 60 }];
let result = underscore.pluck(stooges, 'age');
console.log(result);*/

/*
// 8.sortby //
let sortbyNumber = [1, 2, 3, 4, 5, 7, 8, 9];
const result = underscore.sortBy(sortbyNumber, function (num) { return Math.sin(num); });
console.log(result);*/

/*
// 9.indexby //
let info = [{ name: 'jagdish', age: 40 }, { name: 'prakash', age: 50 }, { name: 'arjun', age: 60 }];
let result = underscore.indexBy(info, 'age');
console.log(result);*/

/*
// 10.countBy //
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = underscore.countBy(numbers, function (num) { return num % 2 == 0 ? 'even' : 'odd'; });
console.log(result);*/

/*
// 11.sample //
const result = underscore.sample([1, 2, 3, 4, 5, 6,], 4);
console.log(result);*/


/*
// 12.toArray //
let result = (function () { return underscore.toArray(arguments).slice(2); })(1, 2, 3, 4);
console.log((result));*/


/*
// 13.first //
let result = underscore.first([5, 4, 3, 2, 1]);
console.log(result);*/


/*
// 14.flatten //
let result = underscore.flatten([1, [2], [3, [[4]]]]);
console.log(result);*/


/*
// 15.uniq //
let result = underscore.uniq([1, 2, 1, 4, 1, 3]);
console.log(result);*/


/*
// 16.Zip //
let result = underscore.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
console.log(result);*/


/*
// 17.object //
let result = underscore.object(['hardik', 'ravi', 'john'], [30, 40, 50]);
console.log(result);*/


// 18. //
/*let result = underscore.sortedIndex([10, 20, 30, 40, 50], 20, 30);
console.log(result);*/
