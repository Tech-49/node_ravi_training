const express = require("express");
const app = express();
app.use(express.json()); // middleware.
const Joi = require('joi');
const logger = require("./middlewares/logger");
const permissionCheck = require("./middlewares/permission");
const customerRoutes = require("./routes/customer")

// Logger middleware.
app.use(logger);

// Permission check middle.
app.use(permissionCheck);

app.use("/api/customers", customerRoutes);

// GET
router.get("/", function (req, res) {
    res.send("Welcome to Anhas Web.");
});

app.listen(3300, function () {
    console.log("Server is running at port 3300");
});