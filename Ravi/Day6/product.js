const express = require("express");
const app = express();

const products = [
    { pNo: 1, productName: "Laptop", price: 45000, color: "silver" },
    { pNo: 2, productName: "Mobile", price: 15000, color: "blue" },
    { pNo: 3, productName: "T.v", price: 18000, color: "black" },
    { pNo: 4, productName: "Headphone", price: 800, color: "red" }
];

app.listen(3400, function () {
    console.log("server is running in 3400");
});


app.get("/api/product", function (req, res) {
    res.send(products);
});

app.get("/api/product/:productNo", function (req, res) {
    const pNo = req.params.productNo;
    const product = products.find((products) => products.pNo == pNo);
    res.send(product);
});

app.post("/api/product/", function (req, res) {
    const pNo = products.length + 1;
    products.push({ pNo: pNo, productName: "cycle", price: 9000, color: "white" });
    res.send("Product create successfully");
})

app.put("/api//:customerId", function (req, res) {
    const cid = req.params.customerId;
    let newName = "laptopBag";
    products[cid].productName = newName;
    res.send("User updated successfully");
});