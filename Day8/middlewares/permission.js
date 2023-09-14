function permissionCheck(req, res, next) {
    let user = "guest";
    if (user == "admin") {
        next();
    }
    else {
        res.send("Access denied here.");
    }
    console.log("Middleware calling...");
}

module.exports = permissionCheck;