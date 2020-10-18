const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')

const User = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
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
    institution:{
        type: String,
        required: false
    },
    isTeacher: {
        type: Boolean,
        required: false,
        default: false,
    },
    isStudent: {
        type: Boolean,
        required: false,
        default: false,
    },
    isParent: {
        type: Boolean,
        required: false,
        default: false,
    },
    isEmailVerified: {
        type: Boolean,
        required: false,
        default: false
    }
}, {timestamps: true});

User.plugin(passportLocalMongoose, { usernameField: 'email' });

module.exports = mongoose.model('User', User);
