const mongoose = require('mongoose');

async function connect() {
    try {
        // Connection string.
        // mongodb://localhost:27017/myFirstApp
        // mongodb://localhost:27017/myFirstApp?user=xxxxx&password=7878787878
        await mongoose.connect('mongodb://localhost:27017/myFirstApp?user=xxxxx&password=7878787878', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database connected successfully.");
    } catch (error) {
        console.log("Unable to connnect!!", error);
    }
}

connect();
