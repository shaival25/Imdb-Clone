const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema({

    rating: {
        type: Number,
        required: true,
        max: 5,
        min: 1
    },
    comment: {
        type: String,
    },
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "movie",
        require: true
    }
});


module.exports = mongoose.model('review', reviewSchema);