const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    year: Number,
    director: String,
    duration: String,
    genre: String,
    rate: Number,
    poster: URL,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;