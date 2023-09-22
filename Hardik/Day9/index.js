require("./database")
const express = require("express");
const app = express();
app.use(express.json()); // middleware.
const Joi = require('joi');
const logger = require("./middlewares/logger");
const permissionCheck = require("./middlewares/permission");
const CustomerModel = require("./models/customerModel")

// Logger middleware.
app.use(logger);

// Permission check middle.
// app.use(permissionCheck);

const customers = [
    { id: 1, name: "mark" },
    { id: 2, name: "ravi" },
    { id: 3, name: "hardik" },
    { id: 4, name: "john" }
];

app.get("/", function (req, res) {
    res.send("Welcome to Anhas Web.");
});

// Get all customers.
app.get("/api/customers", async function (req, res) {
    console.log("Get all customer calling...");
    let customers = await CustomerModel.find();
    res.send(customers);
});

// Get single customer.
app.get("/api/customers/:customerId", async function (req, res) {
    // params -> req.params -> /api/customers/:customerId
    // body -> req.body -> Sending via client request.
    // query -> req.query -> /api/customers/:customerId?skills=1&eduction=2&active=1
    const schema = Joi.object({
        customerId: Joi.string().min(1).max(30).required()
    });

    const { error } = schema.validate(req.params);
    if (error) {
        res.status(400).send({ "message": error.details[0].message });
        return;
    }

    const customerSkills = ["PHP", "Node.js"];
    const cid = req.params.customerId;
    // const customer = customers.find((customer) => customer.id == cid);
    const customer = await CustomerModel.findOne(
        { _id: cid }
    )

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

// Save customer.
app.post("/api/customers", async function (req, res) {

    const schema = Joi.object({
        name: Joi.string().min(3).max(40).required(),
        email: Joi.string().min(3).max(40).required()
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
    // const newCustomer = { id: customerId, name: customerName };
    // customers.push(newCustomer)
    const customer = new CustomerModel({
        name: req.body.name,
        email: req.body.email
    });
    await customer.save();
    res.send({ message: "Customer created successfully.", success: true });
});

app.put("/api/customers/:customerId", async function (req, res) {

    // customers.push({ id: newId, name: "Hardik" + newId })
    const updatedUser = await CustomerModel.findByIdAndUpdate(
        req.params.customerId,
        {
            $set: {
                name: req.body.name
            },
        },
        { new: true }
    )
    res.send({ message: "User updated successfully", user: updatedUser });
});

app.delete("/api/customers/:customerId", async function (req, res) {
    await CustomerModel.findOneAndRemove(req.params.customerId);
    res.send("User deleted successfully");
});

app.listen(3300, function () {
    console.log("Server is running at port 3300");
});