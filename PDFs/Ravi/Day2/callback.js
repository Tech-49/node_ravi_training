
// Callback.
// Promise
// Async/Await

/*onst skills = ["Node.js", "React", "Python"];

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



console.log("First program Run")

setTimeout(function () {
    console.log("Third program Run")
}, 2000)
console.log("Second program Run")