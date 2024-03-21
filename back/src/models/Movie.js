const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    year: Number,
    director: String,
    duration: String,
    genre: Array,
    rate: Schema.Types.Decimal128,
    poster: String,
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;