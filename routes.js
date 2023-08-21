var router = require('express').Router()
var userController = require('./controller/userController')
var genreController = require('./controller/genreController')
var movieController = require('./controller/movieController')

router.post('/createuser', userController.addUser)
router.post('/creategenre', genreController.addGenre)
router.post('/createmovie', movieController.addMovie)


router.get('/getmovie', movieController.getMovie)
router.get('/getreview', movieController.getReview)
router.post('/addreview', userController.addReview)
router.post('/deltemovie', movieController.deleteMovie)

module.exports = router