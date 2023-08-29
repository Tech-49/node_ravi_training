
// Callback.
// Promise
// Async/Await

const skills = ["Node.js", "React", "Python"];

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

console.log("After");