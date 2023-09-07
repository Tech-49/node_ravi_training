const express = require("express");
let app = express();


app.get("/api/customers", function (req, res) {
    res.send(["ravi", "hardik", "john", "mark"])
})

app.get("/api/customers/dtails", function (req, res) {
    res.send([{ id: 1, name: "ravi" },
    { id: 2, name: "hardik" },
    { id: 3, name: "john" },
    { id: 4, name: "mark" }]);
})
app.get("/", function (req, res) {
    res.send("Welcome to Anhas Web")
})

app.listen(3300, function () {
    console.log("server is running at port 3300");
})