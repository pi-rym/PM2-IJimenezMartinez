const axios = require("axios");
const Movie = require("../models/Movie")

module.exports = {
    getMovies: async ()=> {
        try {
            const movie = await Movie.find();
            return movie;
        } catch (error) {
            throw new Error(error);
        }
    },

    createMovie: async (movie) => {
        try {
            const newMovie = await Movie.create(movie);
            return newMovie;
        } catch (error) {
            throw new Error(error);
        }
    }
};