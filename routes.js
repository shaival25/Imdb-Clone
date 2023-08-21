var router = require('express').Router()
var userController = require('./controller/userController')
var genreController = require('./controller/genreController')
var movieController = require('./controller/movieController')

router.post('/createuser', userController.addUser)
router.post('/creategenre', genreController.addGenre)
router.post('/createmovie', movieController.addMovie)

module.exports = router