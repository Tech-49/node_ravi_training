const express = require("express");
const app = express();

const customers = [
    { id: 1, name: "mark", contact: "9978524896" },
    { id: 2, name: "ravi", contact: "9685458785" },
    { id: 3, name: "mahi", contact: "9899569854" },
    { id: 4, name: "hardik", contact: "8484569854" },
    { id: 5, name: "john", contact: "968722647" }
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


app.get("/api/customers/:customerId", function (req, res) {
    let cid = req.params.customerId;
    const customer = customers.filter((customer) => customer.id == cid)
    res.send(customer);
});

app.post("/api/customers", function (req, res) {
    let newId = customers.length + 1;
    customers.push({ id: newId, name: "akon", contact: "968722854" + newId })
    res.send("User created successfully");
});

app.put("/api/customers/:customerId", function (req, res) {
    const cid = req.params.customerId;
    let newName = "amul";
    customers[cid].name = newName;
    res.send("User updated successfully");
});

app.delete("/api/customers", function (req, res) {
    // let newId = customers.length + 1;
    customers.delete({ id: 2 })
    res.send("User deleted successfully");
});