const { get } = require("https");

function verify() {
    console.log("verification your document");
}
module.exports.verify = verify;


function getInfo() {
    setTimeout(function () {
        console.log("get all users information");
    }, 3000)
}
module.exports.getInfo = getInfo;