const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    selectUser: {
        type: String,
        required: true,
        maxlength: 50,
        trim: true
    },
    fromDate: {
        type: Date,
        required: true,
        maxlength: 255,
        trim: true
    },
    toDate: {
        type: Date,
        required: true,
        maxlength: 50,
        trim: true
    },
    message: {
        type: String,
        required: true,
        maxlength: 50,
        trim: true
    },
    status: {
        type: String,
        required: true,
        maxlength: 50,
        trim: true
    }
},
    { timestamps: true });

const LeaveManagementModel = mongoose.model('management', schema);

module.exports = LeaveManagementModel;
