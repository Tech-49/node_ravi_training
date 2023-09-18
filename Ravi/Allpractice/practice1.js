const express = require("express");
const app = express();
app.use(express.json());
const joi = require("joi");

const users = [
    { id: 1, name: "mark", email: "mark@anhasweb.com", password: "123456", password_reset_token: "" },
    { id: 2, name: "ravi", email: "ravi@anhasweb.com", password: "980980", password_reset_token: "" },
    { id: 3, name: "mahi", email: "mahi@anhasweb.com", password: "234765", password_reset_token: "" },
    { id: 4, name: "hardik", email: "hardik@anhasweb.com", password: "126473", password_reset_token: "" },
    { id: 5, name: "john", email: "john@anhasweb.com", password: "293837", password_reset_token: "" }
];

app.get("/api/users", function (req, res) {
    return res.send(users);
});

app.post("/api/login/", function (req, res) {
    const schema = joi.object({
        email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: joi.string().required().min(6).max(15)
    })
    const { error } = schema.validate(req.body);
    if (error) {
        return res.send({ "message": error.details[0].message });
    }

    const result = users.find((user) => user.email === req.body.email && user.password === req.body.password)
    if (result) {
        return res.send({
            success: true,
            message: "Login was successful",
            token: "1r1PjHbAd6ZgOfNnNVeeG5xB4eQDz4Jya08QUFmL6D6M"
        });
    }
    else {
        return res.status(400).send({
            success: false,
            error_message: "Invalid username or password."
        });
    }
});

app.post("/api/register", function (req, res) {
    const userEmail = req.body.email;
    if (userEmail === "") {
        return res.status(400).send({
            success: false,
            error_message: "Email address is required."
        });
    }
    const schema = joi.object({
        name: joi.string().required().min(3).max(15),
        email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        password: joi.string().required().min(6).max(15)
    })
    const { error } = schema.validate(req.body);
    if (error) {
        return res.send({ "message": error.details[0].message });
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
});

app.post("/api/forgot-password", function (req, res) {
    const schema = joi.object({
        email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.send({ "message": error.details[0].message });
    }

    const userEmail = req.body.email
    let result = users.filter(user => (user.email == userEmail));
    let finalR = result.map(val => val.email);

    function generateRandomToken() {
        const tokenLength = 32;
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let token = '';
        for (let i = 0; i < tokenLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            token += characters.charAt(randomIndex);
        }
        return token;
    }

    if (finalR == userEmail) {
        return res.send({
            success: true,
            message: "Forgot password request was successful.",
            password_reset_token: generateRandomToken()
        });
    }
    else {
        return res.status(400).send({
            success: false,
            error_message: "Email address is required."
        });
    }
});



app.post("/api/reset-password/:password_reset_token", function (req, res) {
    const schema = joi.object({
        email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    });
    const { error } = schema.validate(req.body);
    if (error) {
        return res.send({ "message": error.details[0].message })
    }

    const result = users.find((user) => user.email == req.body.email);
    if (result)
        return res.send({
            success: true,
            message: "Password reset successfully."
        });
    else {
        return res.status(400).send({
            success: false,
            error_message: "Invalid password token or email address."
        });
    }
});

app.listen(3000, function () {
    console.log("server is running ");
});







/*const users = [
    { id: 1, name: "mark", email: "mark@anhasweb.com", password: "123456", password_reset_token: "" },
    { id: 2, name: "ravi", email: "ravi@anhasweb.com", password: "980980", password_reset_token: "" },
    { id: 3, name: "mahi", email: "mahi@anhasweb.com", password: "234765", password_reset_token: "" },
    { id: 4, name: "hardik", email: "hardik@anhasweb.com", password: "126473", password_reset_token: "" },
    { id: 5, name: "john", email: "john@anhasweb.com", password: "293837", password_reset_token: "" }
];
console.log("wel come");

let body = "mark@anhasweb.com";
const newArry = users.filter(val => val.email == body);
console.log(newArry);

const NweA = newArry.map((val) => {
    return val.email
})
console.log(NweA);
if (NweA == body) {
    console.log("true");
}
*/
