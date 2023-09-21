const express = require("express");
const app = express();
app.use(express.json());
const auth = require("./authenitcation");

app.get("/api/users", auth.user);

app.post("/api/login/", auth.login);

app.post("/api/register", auth.register);

app.post("/api/forgot-password", auth.forgotPassword);

app.post("/api/reset-password/", auth.resetPassword);

app.listen(3000, function () {
    console.log("server is running ");
});







