const movieModel = require("../models/movie-model")
const genreModel = require("../models/genre-model")

exports.addMovie = (req, res) => {
    let movie = new movieModel(req.body)
    genreModel.findOne({ name: movie.genre }).then((success, err) => {
        if (err) {
            res.json({
                status: -1,
                msg: "SMW",
                data: "Genre Not Found"
            })
        } else {
            console.log(success)
            movie.genre = success._id
            movie.save().then((success, err) => {
                if (err) {
                    console.log(err);
                    res.json({
                        status: -1,
                        msg: "SMW",
                        data: "Please Try After Sometime"
                    })
                } else {
                    res.json({
                        status: 200,
                        msg: "Genre registered!!",
                        data: success
                    })
                }
            })
        }
    })
}