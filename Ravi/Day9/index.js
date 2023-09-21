require("./database");
const express = require("express");
const app = express();
const CustomerModel = require("./models/customerModel");
const { get } = require("mongoose");


// create customer
app.post("/api/customer", async function (req, res) {
    const customer = new CustomerModel({
        name: req.body.name,
        email: req.body.email
    });
    await customer.save();
    res.send({ Message: "customer create successfully", success: true });
})

// Get all customer list
app.get("/api/customers", async function (req, res) {
    console.log("Get all customers calling..");
    let allCustomer = await CustomerModel.fine();
    res.send(allCustomer);
})

// Get single customer
app.get("api/customer/:customerId", async function (req, res) {
    const cid = req.params.customerId;
    const customer = await CustomerModel.findOne({ _id: cid });
    if (!customer) {
        return res.status(400).send("no customer found");
    }
});

// delete customer
app.delete("api/customer/:customerId", async function (req, res) {
    await CustomerModel.findOneAndRemove(req.params.customerId);
    return res.send("User delete successfully");
});

// customer name update
app.put("api/customer/:customerId", async function (req, res) {
    const updateUser = await CustomerModel.findByIdAndUpdate(
        req.params.customerId,
        {
            $set: {
                name: req.body.name,
                email: req.body.email
            },
        },
        { new: true }
    );
    return res.send({ Message: "customer update successfully", user: updateUser });
})

app.listen(3300, function () {
    console.log("server is running ");
});