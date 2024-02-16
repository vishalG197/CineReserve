// controllers/moviesController.js
const Movie = require("../models/Movie");

// @desc Get all movies
// @route GET /movies
// @access Public
const getAllMovies = async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
};

// @desc Create a new movie
// @route POST /movies
// @access Public
const createNewMovie = async (req, res) => {
  const { title, description, releaseDate, genre, duration ,avatar} = req.body;
  const newMovie = new Movie({
    title,
    avatar,
    description,
    releaseDate,
    genre,
    duration,
  });
  const savedMovie = await newMovie.save();
  res.json(savedMovie);
};

// @desc Update a movie
// @route PATCH /movies/:id
// @access Public
const updateMovie = async (req, res) => {
  const { id } = req.params;
  const { title, description, releaseDate, genre, duration } = req.body;
  const updatedMovie = await Movie.findByIdAndUpdate(
    id,
    { title, description, releaseDate, genre, duration },
    { new: true }
  );
  res.json(updatedMovie);
};

// @desc Delete a movie
// @route DELETE /movies/:id
// @access Public
const deleteMovie = async (req, res) => {
  const { id } = req.params;
  await Movie.findByIdAndDelete(id);
  res.json({ message: "Movie deleted successfully" });
};

module.exports = {
  getAllMovies,
  createNewMovie,
  updateMovie,
  deleteMovie,
};
