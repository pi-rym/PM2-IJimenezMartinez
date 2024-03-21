const movieService = require("../services/movieService")

module.exports ={
    getMovies: async (req, res) => {
        try {
            const response = await movieService.getMovies();
            res.status(200).json(response);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    createMovie: async (req, res) => {
        try {
            const { title, year, director, duration, genre, rate, poster } = req.body;
            const newMovie = await movieService.createMovie({title, year, director, duration, genre, rate, poster});
            console.log("Película creada:", newMovie)
            res.status(201).json({newMovie});
        } catch (error) {
            res.status(500).json(error.message)
        }
    },
}
