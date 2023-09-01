/*function getSkills(callback) {
    setTimeout(function () {
        callback(["Node.js", "React", "Python", "php", "javaScript"]);
    }, 1000)
}
getSkills(function (userSkills) {
    console.log(userSkills)
});


function getUser(callback) {
    setTimeout(function () {
        callback([{ id: 1, name: "Ravi" }, { id: 2, name: "Hardik" }, { d: 3, name: "John" }]);
    }, 3000)
}
getUser(function (result) {
    console.log(result)
})



let a = 10;
function number(callback) {
    setTimeout(function () {
        if (a % 2 == 0) {
            callback(("The number is even"));
        }
        else {
            callback(("The number is odd"));
        }
    }, 5000)
}
number(function (name) {
    console.log(name)
})



function sayHello() {
    console.log("hello...")
}
function sayHi() {
    console.log("hi...")
}

function add(num1, num2, callback) {
    setTimeout(function () {
        console.log(num1 + num2);
        callback()
    }, 7000)
}
add(10, 20, sayHello)
add(10, 30, sayHi)*/


class User {

    constructor() {
        this.allGetuser = [];
    }
    getUser(name, age, city) {

        this.allGetuser.push({ studentName: name, studentAge: age, studentCty: city })
    }
    allUser() {
        console.log(this.allGetuser)
    }
}
let userInfo = new User();
userInfo.getUser("ravi", 33, "junagadh")
userInfo.getUser("hardik", 32, "ahemdabad")
userInfo.allUser()