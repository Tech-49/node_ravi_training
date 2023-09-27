require("./database");
const express = require("express");
const app = express();
const { get } = require("mongoose");
const auth = require("./customer");
app.use(express.json()); // middleware.


// create customer
app.post("/api/customer", auth.createCustomer);

// Get all customer list
app.get("/api/customers", auth.getCustomers);

// Get single customer
app.get("/api/customer/:customerId", auth.singleCustomer);

// delete customer
app.delete("/api/customer/:customerId", auth.deleteCustomer);

// customer name @ email update
app.put("/api/customer/:customerId", auth.updateCustomer);

app.listen(3300, function () {
    console.log("server is running ");
});