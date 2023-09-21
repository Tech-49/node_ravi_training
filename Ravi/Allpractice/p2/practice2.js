
const express = require("express");
const app = express();
app.use(express.json())
const auth = require("./authentication")


app.get("/api/students", auth.students);

app.get("/api/valid_student_age", auth.validAge);

app.get("/api/single_student", auth.singleStudent);

app.post("/api/add_student", auth.addStudent);

app.delete("/api/student/:studentName", auth.deletStudent);







app.listen(3200, function () {
    console.log("srever is running at 3200");
})

