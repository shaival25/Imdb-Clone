const userModel = require("../models/user-model")
const couterModel = require("../models/counter-model")

exports.addUser = (req, res) => {
    let user = new userModel(req.body)
    console.log(user)
    couterModel.findOneAndUpdate({ type: "Userseq" }, { $inc: { "seq": 1 } }, { new: true }).then((success, err) => {
        if (err) {
            res.json({
                status: -1,
                msg: "SMW",
                data: "Please Try After Sometime 1"
            })
        } else {
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