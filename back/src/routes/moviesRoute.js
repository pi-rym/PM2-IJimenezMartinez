const { Router } = require("express")
const moviesController = require("../controllers/moviesController")
const validateMovie = require("../middleware/validateMovie")

const moviesRoute = Router()

moviesRoute.get('/', moviesController.getMovies)
moviesRoute.post('/movies', moviesController.createMovie)



module.exports = moviesRoute;