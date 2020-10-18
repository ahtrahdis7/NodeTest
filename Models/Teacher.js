const mongoose = require('mongoose');

const Teacher = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    subject: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'subject',
    }
    
}, {timestamps: true});


module.exports = mongoose.model('teacher', Teacher);
