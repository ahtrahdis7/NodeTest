const mongoose = require('mongoose');

const Notice = mongoose.Schema({
    thread:{
        type: String,
        required: false
    },
    byUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
    
}, {timestamps: true});


module.exports = mongoose.model('discussion', Notice);
