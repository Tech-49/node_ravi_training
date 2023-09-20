const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50,
        trim: true
    },
    email: {
        type: String,
        required: true,
        maxlength: 255,
        trim: true
    }
},
    { timestamps: true });

const CustomerModel = mongoose.model('Customer', schema);

module.exports = CustomerModel;
