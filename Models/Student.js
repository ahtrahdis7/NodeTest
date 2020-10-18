const mongoose = require('mongoose');

const Score = mongoose.Schema({
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
    },
    marks: {
        type: Number,
        required: false,
    },
    remarks: {
        type: String,
        required: false
    }
})

const Student = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    roll_no: {
        type: String,
        required: false
    },
    class:{
        type: String,
        required: false
    },
    report: {
        type: String,
        required: false,
    },
    score: [Score],

}, {timestamps: true});


module.exports = mongoose.model('Student', Student);
