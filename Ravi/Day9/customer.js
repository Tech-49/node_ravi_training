
const joi = require("joi");
const CustomerModel = require("./models/customerModel");

const createCustomer = async function (req, res) {
    const schema = joi.object({
        name: joi.string().required(),
        email: joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).send({ message: error.details[0].message });
    }
    const customer = new CustomerModel({
        name: req.body.name,
        email: req.body.email
    });
    await customer.save();
    res.send({ Message: "customer create successfully", success: true });
}
const getCustomers = async function (req, res) {
    console.log("Get all customers calling..");
    let allCustomer = await CustomerModel.fine();
    if (!allCustomer) {
        return res.status(400).send("customer not found");
    }
    res.send(allCustomer);
}
const singleCustomer = async function (req, res) {
    const cid = req.params.customerId;
    const customer = await CustomerModel.findOne({ _id: cid });
    if (!customer) {
        return res.status(400).send("no customer found");
    }
}
const deleteCustomer = async function (req, res) {
    await CustomerModel.findOneAndRemove(req.params.customerId);
    return res.send("User delete successfully");
}
const updateCustomer = async function (req, res) {
    const schema = joi.object({
        name: joi.string().required().min(3).max(20),
        email: joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).send({ message: error.details[0].message });
    }
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
}

module.exports.createCustomer = createCustomer;
module.exports.getCustomers = getCustomers;
module.exports.singleCustomer = singleCustomer;
module.exports.deleteCustomer = deleteCustomer;
module.exports.updateCustomer = updateCustomer;
