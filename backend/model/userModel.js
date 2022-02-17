const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        require: true
    },
    Designation: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    imgurl: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('user', userSchema);