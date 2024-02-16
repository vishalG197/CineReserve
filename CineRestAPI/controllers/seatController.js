// controllers/seatsController.js
const Seat = require('../models/Seat');

// @desc Get all seats
// @route GET /seats
// @access Public
const getAllSeats = async (req, res) => {
  
   
    const seats = await Seat.find();
    res.json(seats);
 
    
};

// @desc Create a new seat
// @route POST /seats
// @access Public
const createNewSeat = async (req, res) => {

    const { userId,showId,movieId, row, number, status } = req.body;
    const newSeat = new Seat({userId,showId, movieId, row, number, status });
    const savedSeat = await newSeat.save();
    res.json(savedSeat);
  
};

// @desc Update a seat
// @route PATCH /seats/:id
// @access Public
const updateSeat = async (req, res) => {
 
    const { id } = req.params;
    const { movieId, row, number, status } = req.body;
    const updatedSeat = await Seat.findByIdAndUpdate(
      id,
      { movieId, row, number, status },
      { new: true }
    );
    res.json(updatedSeat);
  
};

// @desc Delete a seat
// @route DELETE /seats/:id
// @access Public
const deleteSeat = async (req, res) => {

    const { id } = req.params;
    await Seat.findByIdAndDelete(id);
    res.json({ message: 'Seat deleted successfully' });
 
};

module.exports = {
  getAllSeats,
  createNewSeat,
  updateSeat,
  deleteSeat,
};
