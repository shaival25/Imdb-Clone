const userModel = require("../models/user-model")
const reviewModel = require("../models/review-model")
const couterModel = require("../models/counter-model")

exports.addUser = (req, res) => {
    console.log(req.body)
    let user = new userModel(req.body)
    console.log(user)
    couterModel.findOneAndUpdate({ type: "UserSeq" }, { $inc: { "seq": 1 } }, { new: true }).then((success, err) => {
        if (err) {
            res.json({
                status: -1,
                msg: "SMW",
                data: "Please Try After Sometime 1"
            })
        } else {
            console.log(success.seq)
            id = success.seq
            user.id = id
            console.log(user)
            user.save().then((success, err) => {
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
                        msg: "User registered!!",
                        data: success
                    })
                }
            })
        }
    })
}

exports.addReview = (req, res) => {
    let review = new reviewModel(req.body)
    review.save().then((success, err) => {
        if (err) {
            res.json({
                status: -1,
                msg: "SMW",
                data: "Please Try After Sometime 2"
            })
        } else {
            res.json({
                status: 200,
                msg: "Review Added!!",
                data: success
            })
        }
    })
}