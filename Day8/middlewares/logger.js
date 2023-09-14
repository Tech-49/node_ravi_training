function log(req, res, next) {
    console.log(req.body)
    console.log("Logging request in logger module.");
    next();
}

module.exports = log;