const mongoose = require('mongoose');

const genreSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
    }
});

const genreModel = mongoose.model('genre', userSchema);

module.exports = genreSchema;