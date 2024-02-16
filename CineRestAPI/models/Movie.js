// models/movie.js
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  avatar:{
type: String,
required: true,
  },
  description: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  shows: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Show',
  }],
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
