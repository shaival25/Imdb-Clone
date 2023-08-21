var router = require('express').Router()
var userController = require('./controller/userController')
var genreController = require('./controller/genreController')

router.post('/createuser', userController.addUser)

module.exports = router