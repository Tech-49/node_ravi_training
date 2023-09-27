const express = require("express");
const app = express();
app.use(express.json()); // middleware.


app.post("/api/product", function (req, res) {

})

app.listen(3300, function () {
    console.log("server is running ");
});
