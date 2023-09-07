const express = require("express");
const app = express();

const customers = [
    { id: 1, name: "mark", contact: "9978524896" },
    { id: 3, name: "ravi", contact: "9685458785" },
    { id: 4, name: "ravi", contact: "9899569854" },
    { id: 5, name: "hardik", contact: "8484569854" },
    { id: 6, name: "john", contact: "968722647" }
];


app.listen(3300, function () {
    console.log("server is running ");
});

app.get("/", function (req, res) {
    res.send("welcome to Anhas web");
});

app.get("/api/customers", function (req, res) {
    res.send(customers);
});


app.get("/api/customers/1", function (req, res) {
    const customer = customers.filter((customer) => customer.id == 1)
    res.send(customer);
});

app.post("/api/customers", function (req, res) {
    let newId = customers.length + 1;
    customers.push({ id: newId, name: "akon", contact: "968722854" + newId })
    res.send("User created successfully");
});