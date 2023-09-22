const express = require("express");
const app = express();

const customers = [
    { id: 1, name: "mark" },
    { id: 2, name: "ravi" },
    { id: 3, name: "hardik" },
    { id: 4, name: "john" }
];

// GET / - welcome
// GET /api/customers - all customer
// GET /api/customers/1 - single customer
// POST /api/customers - Create

// GET
app.get("/", function (req, res) {
    res.send("Welcome to Anhas Web.");
});

app.get("/test/:customerId/:userId", function (req, res) {
    // Route params
    const cid = req.params.customerId;
    const uid = req.params.userId;
    res.send(req.params);
});

// method - GET
app.get("/api/customers", function (req, res) {
    res.send(customers);
});

app.get("/api/customers/:customerId", function (req, res) {
    const cid = req.params.customerId;
    const customer = customers.filter((customer) => customer.id == cid);
    res.send(customer);
});

// app.get("/api/customers/2", function (req, res) {
//     const customer = customers.filter((customer) => customer.id == 2)
//     res.send(customer);
// });

app.post("/api/customers", function (req, res) {
    const newId = customers.length + 1;
    customers.push({ id: newId, name: "Hardik" + newId })
    res.send("Customer created successfully");
});

app.put("/api/customers/2", function (req, res) {
    const newName = "Updated name";
    // customers.push({ id: newId, name: "Hardik" + newId })
    res.send("User updated successfully");
});

app.delete("/api/customers/2", function (req, res) {
    res.send("User deleted successfully");
});

app.listen(3300, function () {
    console.log("Server is running at port 3300");
});