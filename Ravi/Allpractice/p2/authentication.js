const joi = require("joi");
const studentInfo = [
    { name: "John", age: 15, city: "New York" },
    { name: "Alice", age: 12, city: "Los Angeles" },
    { name: "Bob", age: 35, city: "Chicago" },
    { name: "Eva", age: 28, city: "San Francisco" },
    { name: "Michael", age: 40, city: "Miami" }
];


const students = function (req, res) {
    return res.send(studentInfo);
};

const validAge = function (req, res) {
    const schema = joi.object({
        age: joi.string().required()
    })
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).send({ message: error.details[0].message });
    }

    const result = studentInfo.filter(student => student.age >= req.body.age);
    return res.send(result);
};

const singleStudent = function (req, res) {
    const schema = joi.object({
        name: joi.string().required().min(3).max(10)
    })
    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).send({ message: error.details[0].message });
    }
    const result = studentInfo.filter(student => student.name == req.body.name)
    if (result.length == 0) {
        return res.status(400).send("student not found");
    } else {
        return res.send(`welcome => ${result[0].name}`);
    }
}

const addStudent = function (req, res) {
    const schema = joi.object({
        name: joi.string().required().min(3).max(12),
        age: joi.string().required().min(2).max(2),
        city: joi.string().required()
    });
    const { error } = schema.validate(req.body);
    if (error) {
        res.status(400).send({ message: error.details[0].message });
    }
    const sName = req.body.name;
    const sAge = req.body.age;
    const sCity = req.body.city;
    const newAry = { Name: sName, age: sAge, city: sCity };
    studentInfo.push(newAry);
    return res.send("student added");
}

const deleteStudent = function (req, res) {
    req.params.stu
}

module.exports.students = students;
module.exports.validAge = validAge;
module.exports.singleStudent = singleStudent;
module.exports.addStudent = addStudent;
module.exports.deleteStudent = deleteStudent;