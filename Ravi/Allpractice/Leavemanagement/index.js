require("./database");
const express = require("express");
const app = express();
console.log("hello");
const Leavemanagement = require("./module/leavemodule");
app.use(express.json());


app.post("/api/leavemanagement", async function (req, res) {
    const Management = new Leavemanagement({
        selectUser: req.body.selectUser,
        fromDate: req.body.fromDate,
        toDate: req.body.toDate,
        message: req.body.message,
        status: req.body.status
    });
    await Management.save();
    res.send({ message: "Leave management data successfully add.", success: true });
});

app.get("/api/leavemanagement", async function (req, res) {
    console.log("Get all Leave Report..");
    let allLeaveReports = await Leavemanagement.find();
    res.send(allLeaveReports);
});

app.put("/api/leavemanagementstatus/:userId", async function (req, res) {

    // customers.push({ id: newId, name: "Hardik" + newId })
    const updatedUser = await Leavemanagement.findByIdAndUpdate(
        req.params.userId,
        {
            $set: {
                status: req.body.status
            },
        },
        { new: true }
    )
    res.send({ message: "User updated successfully", user: updatedUser });
});


app.listen(3300, function () {
    console.log("Server is running at port 3300");
});