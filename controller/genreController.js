const genreModel = require("../models/genre-model")


exports.addGenre = (req, res) => {
    let genre = new genreModel(req.body)
    genre.save().then((success, err) => {
        if (err) {
            console.log(err);
            res.json({
                status: -1,
                msg: "SMW",
                data: "Please Try After Sometime 2"
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