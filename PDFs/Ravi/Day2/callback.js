
// Callback.
// Promise
// Async/Await

/*const skills = ["Node.js", "React", "Python"];

function getUser(callback) {
    setTimeout(function () {
    callback({ id: 1, name: "Hardik" });
    }, 2000);
}

console.log("Before");

getUser(function (user) {
    console.log(user);
    console.log(skills)
});

console.log("After");*/







function getSkills(callback) {
    setTimeout(function () {
        callback(["Node.js", "React", "Python", "php", "javaScript"]);
    }, 4000)
}


function getUser(callback) {
    setTimeout(function () {
        callback({ id: 1, name: "Ravi", id: 2, name: "Hardik", id: 3, name: "John" });
    }, 2000)
}

getUser(function (result) {
    console.log(result)
})

getSkills(function (userSkills) {
    console.log(userSkills)
});




let a = 10;
function number() {
    setTimeout(function () {
        if (a % 2 == 0) {
            console.log("The number is even");
        }
        else {
            console.log("The number is odd")
        }
    }, 4000)
}
number()







function sayHello() {
    console.log("hello...")
}
function sayHi() {
    console.log("hi...")
}

let x = 10;
let y = 20;
function add(num1, num2, callback) {
    console.log(num1 + num2);
    callback()
}
add(x, y, sayHello)
add(10, 30, sayHi)