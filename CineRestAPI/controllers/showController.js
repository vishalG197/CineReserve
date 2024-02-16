// controllers/showsController.js
const Show = require('../models/Show');

// @desc Get all shows
// @route GET /shows
// @access Public
const getAllShows = async (req, res) => {
  
    const shows = await Show.find();
    res.json(shows);
  
};

// @desc Create a new show
// @route POST /shows
// @access Public
const createNewShow = async (req, res) => {
 
    const { movieId, startTime } = req.body;
    const newShow = new Show({ movieId, startTime });
    const savedShow = await newShow.save();
    res.json(savedShow);
 
};

// @desc Update a show
// @route PATCH /shows/:id
// @access Public
const updateShow = async (req, res) => {
  
    const { id } = req.params;
    const { movieId, startTime } = req.body;
    const updatedShow = await Show.findByIdAndUpdate(
      id,
      { movieId, startTime },
      { new: true }
    );
    res.json(updatedShow);
  
};

// @desc Delete a show
// @route DELETE /shows/:id
// @access Public
const deleteShow = async (req, res) => {

    const { id } = req.params;
    await Show.findByIdAndDelete(id);
    res.json({ message: 'Show deleted successfully' });
  
};

module.exports = {
  getAllShows,
  createNewShow,
  updateShow,
  deleteShow,
};
