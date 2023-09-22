const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://harbour-staging:ZWWOc12sl7X9IvZv@staging-instance.cornq.mongodb.net/myFirstApp', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database connected successfully.");
    } catch (error) {
        console.log("Unable to connnect!!", error);
    }
}
connect();

