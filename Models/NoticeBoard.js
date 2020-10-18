const mongoose = require('mongoose');

const Notice = mongoose.Schema({
    type:{
        type: String,
        required: false
    },
    notice: {
        type: String,
        required: false
    },
    byUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
    
}, {timestamps: true});


module.exports = mongoose.model('notice', Notice);
