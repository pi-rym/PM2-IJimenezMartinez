const movieService = require("../services/movieService")

module.exports ={
    moviesController: async (req, res) => {
        try {
            const response = await movieService.getMovies();
            res.status(200).json(response);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    getMovieById: async (req, res) => {
        const {id} = req.params;
        const movie = await movieService.getMovieById(id);
        res.send(id);
    },

    createMovie: async (req, res) => {
        const { title, year, director, duration, genre, rate, post } = req.body;
        const newMovie = await movieService.createMovie({title, year, director, duration, genre, rate, post});
        res.status(201).json(newMovie);
    },
}
