const { Router } = require("express")
const moviesController = require("../controllers/moviesController")

const moviesRoute = Router()

moviesRoute.get('/', moviesController.getMovies)
moviesRoute.post('/', moviesController.createMovie)



module.exports = moviesRoute;