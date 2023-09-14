const express = require("express");
const app = express();
app.use(express.json()); // middleware.
const Joi = require('joi');
const logger = require("./middlewares/logger");
const permissionCheck = require("./middlewares/permission");

// Logger middleware.
app.use(logger);

// Permission check middle.
app.use(permissionCheck);

const customers = [
    { id: 1, name: "mark" },
    { id: 2, name: "ravi" },
    { id: 3, name: "hardik" },
    { id: 4, name: "john" }
];

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
    console.log("Get all customer calling...");
    res.send(customers);
});

app.get("/api/customers/:customerId", function (req, res) {
    // params -> req.params -> /api/customers/:customerId
    // body -> req.body -> Sending via client request.
    // query -> req.query -> /api/customers/:customerId?skills=1&eduction=2&active=1
    const schema = Joi.object({
        customerId: Joi.string().min(1).max(3).required()
    });

    const { error } = schema.validate(req.params);
    if (error) {
        res.status(400).send({ "message": error.details[0].message });
        return;
    }

    const customerSkills = ["PHP", "Node.js"];
    const cid = req.params.customerId;
    const customer = customers.find((customer) => customer.id == cid);

    // Optional
    if (req.query.skills == "1") {
        customer.skills = customerSkills;
    }

    if (!customer) {
        res.status(404).send("No user found.");
        return;
    }
    res.send(customer);
});

// app.get("/api/customers/2", function (req, res) {
//     const customer = customers.filter((customer) => customer.id == 2)
//     res.send(customer);
// });

app.post("/api/customers", function (req, res) {

    const schema = Joi.object({
        id: Joi.string().min(1).max(3).required(),
        name: Joi.string().min(3).max(40).required()
    });

    const { error } = schema.validate(req.body);

    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }

    const customerId = req.body.id;
    const customerName = req.body.name;

    // Validation.
    if (customerName == "") {
        // 400 - Validation failed.
        // 404 - Not found.
        res.status(400).send({ "message": error.details[0].message });
        return;
    }
    const newCustomer = { id: customerId, name: customerName };
    customers.push(newCustomer)
    res.send(newCustomer);
});

app.put("/api/customers/2", function (req, res) {
    const newName = "Updated name";
    // customers.push({ id: newId, name: "Hardik" + newId })
    res.send("User updated successfully");
});

app.delete("/api/customers/2", function (req, res) {
    res.send("User deleted successfully");
});

// Query string.

app.listen(3300, function () {
    console.log("Server is running at port 3300");
});