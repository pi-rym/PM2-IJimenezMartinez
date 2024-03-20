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
};