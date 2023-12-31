const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    id: {
        type: Number,

    },
    password: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('user', userSchema);