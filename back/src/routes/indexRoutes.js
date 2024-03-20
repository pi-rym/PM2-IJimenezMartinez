const { Router } = require("express");
const moviesRoute = require("./moviesRoute");
const moviesController = require("../controllers/moviesController");

const router = Router();

router.get('/movie/:id', moviesController.getMovieById);

router.use('/movies', moviesRoute);

router.post('/movies', moviesController.createMovie);

module.exports = router;