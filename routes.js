var router = require('express').Router()
var userController = require('./controller/userController')
var genreController = require('./controller/genreController')

router.post('/createuser', userController.addUser)
router.get('/', {
    let data = {
        name: "GFG",
        age: 18,
        male: true
    }

    res.send(data);
})

module.exports = router