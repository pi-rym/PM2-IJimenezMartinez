const axios = require("axios");
const Movie = require("../models/Movie")

module.exports = {
    getMovies: async ()=> {
        try {
            // const { data } = await axios.get("https://students-api.up.railway.app/movies");
            // return data;
            const movie = await Movie.find();
            return movie;
        } catch (error) {
            throw new Error(error);
        }
    },

    getMovieById: async (id) => {
        const movie =await Movie.findById(id);
        return movie;
    },

    createMovie: async (movie) => {
        const newMovie = await Movie.create(movie);
        return newMovie;
    }
};