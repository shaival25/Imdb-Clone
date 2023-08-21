const movieModel = require("../models/movie-model")
const genreModel = require("../models/genre-model")
const genreController = require("../controller/genreController")

exports.addMovie = (req, res) => {
    let movie = new movieModel(req.body)
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

exports.getMovie = (req, res) => {
    movieModel.find().populate('genre').then((success, err) => {
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

exports.getReview = (req, res) => {
    movieModel.find().populate('genre').populate('review').then((success, err) => {
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

exports.updateMovie = (req, res) => {
    const id = req.params._id;
    let updateData = {};
    if (req.body.name) {
        updateData.name = req.body.name;
    }
    if (req.body.description) {
        updateData.description = req.body.description;
    }
    if (req.body.genre) {
        updateData.genre = req.body.genre;
    }
    if (req.body.user) {
        updateData.user = req.body.user;
    }
    if (req.body.review) {
        updateData.review = req.body.review;
    }
    movieModel.findByIdAndUpdate(id, updateData, { new: true }).then((success, err) => {
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
                msg: "Movie updated!!",
                data: success
            })
        }
    })
}

exports.deleteMovie = (req, res) => {
    const id = req.params._id;
    movieModel.findByIdAndDelete(id).then((success, err) => {
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
                msg: "Movie deleted!!",
                data: success
            })
        }
    })
}