const express = require("express");
const app = express();

// GET
app.get("/", function (req, res) {
    res.send("Welcome to Anhas Web.");
});

// method - GET
app.get("/api/customers", function (req, res) {
    res.send(["Ravi", "Mark", "John", "Hardik"]);
});

app.get("/api/customers/1", function (req, res) {
    res.send("Hello");
});

app.listen(3300, function () {
    console.log("Server is running at port 3300");
});