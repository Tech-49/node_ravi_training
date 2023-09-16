const express = require("express");
const app = express();
app.use(express.json());
const Joi = require('joi');

const users = [
    { id: 1, name: "mark", email: "mark@anhasweb.com", password: "12345", password_reset_token: "" },
    { id: 2, name: "ravi", email: "ravi@anhasweb.com", password: "980980", password_reset_token: "" },
    { id: 3, name: "mahi", email: "mahi@anhasweb.com", password: "234765", password_reset_token: "" },
    { id: 4, name: "hardik", email: "hardik@anhasweb.com", password: "126473", password_reset_token: "" },
    { id: 5, name: "john", email: "john@anhasweb.com", password: "293837", password_reset_token: "" }
];

app.get("/api/users", function (req, res) {
    res.send(users);
});

app.post("/api/login/", function (req, res) {
    users.forEach(function (num) {
        if (num.email == req.body.email && num.password == req.body.password) {
            res.send("Login was successful");
        } else {
            res.status(400).send("Invalid username or password")
        }
    });
    // const schema = Joi.object({
    //     email: Joi.required().valid({ allow: ['com', 'net'] }),
    //     password: Joi.required().min(6).max(15)
    // })
    // const { error } = schema.validate(req.body);
    // if (error) {
    //     res.send(error)
    //     return;
    // }
});

app.post("/api/register", function (req, res) {
    const userName = req.body.name;
    const userEmail = req.body.email;
    const userPassword = req.body.password;

    const user = { name: userName, email: userEmail };
    res.send(user)

    const schema = Joi.object({
        name: Joi.string().required().max(15).min(3),
        email: Joi.required().valid({ allow: ['com', 'net'] }),
        password: Joi.required().min(6).max(15)
    })
    const { error } = schema.validate(req.body);
    if (error) {
        res.send(error)
        return;
    }

    const newUser = { name: userName, userEmail, password: userPassword }
    users.push(newUser);
    res.send("Registration was successful.");

});



app.post("/api/forgot-password", function (req, res) {
    users.forEach(function (num) {
        if (num.email == req.body.email) {
            res.send("Forgot password request was successful");
        } else {
            res.status(400).send("Email address is required")
        }
    });

    const schema = Joi.object({
        email: Joi.required().valid({ allow: ['com', 'net'] })
    })
    const { error } = schema.validate(req.body);
    if (error) {
        res.send(error)
        return;
    }
});




app.post("/api/reset-password/:password_reset_token", function (req, res) {
    users.forEach(function (num) {
        if (num.email == req.body.email) {
            res.send("Password reset successfully.");
        } else {
            res.status(400).send("Invalid password token or email address.");
        }
    });
    const schema = Joi.object({
        email: Joi.required().valid({ allow: ['com', 'net'] })
    })
    const { error } = schema.validate(req.body);
    if (error) {
        res.send(error)
        return;
    }
});



app.listen(3000, function () {
    console.log("server is running ");
});