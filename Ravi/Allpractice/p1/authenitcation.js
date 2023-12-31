
const joi = require("joi");
const generateRandomToken = require("./helper");
const users = [
    { id: 1, name: "mark", email: "mark@anhasweb.com", password: "123456", password_reset_token: "" },
    { id: 2, name: "ravi", email: "ravi@anhasweb.com", password: "980980", password_reset_token: "" },
    { id: 3, name: "mahi", email: "mahi@anhasweb.com", password: "234765", password_reset_token: "" },
    { id: 4, name: "hardik", email: "hardik@anhasweb.com", password: "126473", password_reset_token: "" },
    { id: 5, name: "john", email: "john@anhasweb.com", password: "293837", password_reset_token: "" }
];

const user = function (req, res) {
    return res.send(users);
}
const login = function (req, res) {

    const schema = joi.object({
        email: joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: joi.string().required().min(6).max(15)
    })
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).send({ message: error.details[0].message });
    }

    const result = users.find((user) => user.email === req.body.email && user.password === req.body.password)
    if (result) {
        return res.send({
            success: true,
            message: "Login was successful",
            token: generateRandomToken()
        });
    }
    else {
        return res.status(400).send({
            success: false,
            error_message: "Invalid username or password."
        });
    }
}
const register = function (req, res) {
    const userEmail = req.body.email;
    const schema = joi.object({
        name: joi.string().required().min(3).max(15),
        email: joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: joi.string().required().min(6).max(15)
    })
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).send({
            success: false,
            error_message: "Email address is not found",
            message: error.details[0].message
        });
    }

    const userName = req.body.name;
    const userPassword = req.body.password;

    const newUser = { name: userName, userEmail, password: userPassword }
    users.push(newUser);
    const finalResponse = {
        success: true,
        message: "Registration was successful.",
        user: {
            name: userName,
            email: userEmail
        }
    }
    return res.send(finalResponse);
}
const forgotPassword = function (req, res) {
    const schema = joi.object({
        email: joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).send({ message: error.details[0].message });
    }

    const userEmail = req.body.email
    let result = users.filter(user => (user.email == userEmail));
    if (result == "") {
        return res.status(400).send({
            success: false,
            error_message: "Email address is not found."
        });
    }
    let finalR = result[0].email;
    if (finalR == userEmail) {
        return res.send({
            success: true,
            message: "Forgot password request was successful.",
            password_reset_token: generateRandomToken()
        });
    }
}
const resetPassword = function (req, res) {
    const schema = joi.object({
        email: joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).send({ message: error.details[0].message })
    }

    const result = users.find((user) => user.email == req.body.email);
    if (result) {
        result.password_reset_token = generateRandomToken()
        return res.send({
            success: true,
            message: "Password reset successfully."
        });
    }
    else {
        return res.status(400).send({
            success: false,
            error_message: "Invalid password token or email address."
        });
    }
}

module.exports.user = user;
module.exports.login = login;
module.exports.register = register;
module.exports.forgotPassword = forgotPassword;
module.exports.resetPassword = resetPassword;