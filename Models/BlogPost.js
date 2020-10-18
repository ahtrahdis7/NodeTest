const mongoose = require('mongoose');

const Blog = mongoose.Schema({
    title:{
        type: String,
        required: false
    },
    brief: {
        type: String,
        required: false
    },
    description: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    conslusion: {
        type: String,
        required: false
    },
    quote: {
        type: String,
        required: false
    },
}, {timestamps: true});


module.exports = mongoose.model('blog', Blog);
