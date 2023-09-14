const router = require("express").Router;

const customers = [
    { id: 1, name: "mark" },
    { id: 2, name: "ravi" },
    { id: 3, name: "hardik" },
    { id: 4, name: "john" }
];

// method - GET
router.get("/", function (req, res) {
    console.log("Get all customer calling...");
    res.send(customers);
});

router.get("/:customerId", function (req, res) {
    // params -> req.params -> /:customerId
    // body -> req.body -> Sending via client request.
    // query -> req.query -> /:customerId?skills=1&eduction=2&active=1
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

router.post("", function (req, res) {

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

router.put("/2", function (req, res) {
    const newName = "Updated name";
    // customers.push({ id: newId, name: "Hardik" + newId })
    res.send("User updated successfully");
});

router.delete("/2", function (req, res) {
    res.send("User deleted successfully");
});

module.exports = router;