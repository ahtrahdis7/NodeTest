const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')

const User = mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    picture: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    isTeacher: {
        type: String,
        required: false
    },
    isStudent: {
        type: String,
        required: false
    },
    isParent: {
        type: String,
        required: false
    }
}, {timestamps: true});

User.plugin(passportLocalMongoose, { usernameField: 'email' });

module.exports = mongoose.model('User', User);
