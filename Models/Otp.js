const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')

const User = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    otp: {
        type: Number,
        required: true
    }
    
}, {timestamps: true});


module.exports = mongoose.model('otp', User);
