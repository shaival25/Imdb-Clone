const movieModel = require("../models/movie-model")
const genreModel = require("../models/genre-model")
const genreController = require("../controller/genreController")

exports.addMovie = (req, res) => {
    let movie = new movieModel(req.body)
    var genre = genreController.getGenre(movie.genre)
    if (genre == false) {
        res.json({
            status: -1,
            msg: "SMW",
            data: "Genre Not Found"
        })
    } else {
        movie.genre = genre
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
                    msg: "Movie registered!!",
                    data: success
                })
            }
        })
    }
}