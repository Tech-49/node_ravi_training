const e = require("express");
const express = require("express");
const joi = require("joi")
const app = express();
app.use(express.json()); // middleware

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
    const customerSkill = ["php", "node"];
    const customerCity = "Ahemdabad";
    let cid = req.params.customerId;

    const customer = customers.find((customer) => customer.id == cid)
    if (req.query.city == "1") {
        customer.city = customerCity;
    }
    if (req.query.skills == "1") {
        customer.skills = customerSkill;
    }

    if (!customer) {
        res.status(404).send("customer not found");
    }
    res.send(customer);

});

app.post("/api/customers", function (req, res) {
    // validation joi
    const schema = joi.object({
        id: joi.string().min(1).max(3),
        name: joi.string().min(3).max(30),
        contact: joi.string().min(10)

    });
    const { error } = schema.validate(req.body);
    if (error) {
        res.status(400).send({ "message": error.details[0].message });
        return;
    }

    // let newId = customers.length + 1;
    const customerId = req.body.id
    const customerName = req.body.name
    // validation
    if (customerName == "") {
        // 400- validation failed
        // 404 not found
        res.status(400).send("Customer name is required");
        return;
    }
    const customerContact = req.body.contact
    const newCustomer = { id: customerId, name: customerName, contact: customerContact }
    customers.push(newCustomer);
    res.send(newCustomer);
});

app.put("/api/customers/:customerId", function (req, res) {
    const cid = req.params.customerId;
    let newName = "amul";
    customers[cid].name = newName;
    res.send("User updated successfully");
});

app.delete("/api/customers/:customerId", function (req, res) {
    const cid = req.params.customerId
    const index = customers.findIndex(customer => customer.id === cid);
    const result = customers.splice(index, 1);

    res.send(`User deleted successfully${{ result }}`);
});
