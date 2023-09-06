const express = require("express");
let app = express();


app.get("/api/customers", function (req, res) {
    res.send(["ravi", "hardik", "john", "mark"])
})
app.get("/", function (req, res) {
    res.send("Welcome to Anhas Web")
})

app.listen(3300, function () {
    console.log("server is running at port 3300");
})