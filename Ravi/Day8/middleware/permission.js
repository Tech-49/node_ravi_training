function permission(req, res, next) {

    if (req.query.user == "admin") {
        next();
    } else {
        res.send("Access denied")
    }

}

module.exports = permission;