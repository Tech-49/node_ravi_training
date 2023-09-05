

function log() {
    console.log("Logging...")
}

function sendEmailLog() {
    console.log("Sending email logs...");
}
// {mylogger:log, sendEmailLog: sendEmailLog}
module.exports.mylogger = log
module.exports.sendEmailLog = sendEmailLog