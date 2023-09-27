const mongoose = require('mongoose');

async function connect() {
    try {
        const dbString = "mongodb://0.0.0.0:27017/Leavemanagement"
        await mongoose.connect(dbString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database connected successfully.", dbString);
    } catch (error) {
        console.log("Unable to connnect!!", error);
    }
}
connect();

