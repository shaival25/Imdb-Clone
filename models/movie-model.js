const mongoose = require("mongoose")

const MovieSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String
    },
    genre: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "genre",
        require: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        require: true

    }
})

module.exports = mongoose.model("movie", MovieSchema)