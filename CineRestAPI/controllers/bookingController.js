
const Booking = require('../models/Booking');

// @desc Get all bookings
// @route GET /bookings
// @access Public
const getAllBookings = async (req, res) => {
  
    const bookings = await Booking.find();
    res.json(bookings);
 
};

// @desc Create a new booking
// @route POST /bookings
// @access Public
const createNewBooking = async (req, res) => {
  
    const { userId, showId, seats } = req.body;
    const newBooking = new Booking({ userId, showId, seats });
    const savedBooking = await newBooking.save();
    res.json(savedBooking);
 
};

// @desc Update a booking
// @route PATCH /bookings/:id
// @access Public
const updateBooking = async (req, res) => {
  
    const { id } = req.params;
    const { userId, showId, seats } = req.body;
    const updatedBooking = await Booking.findByIdAndUpdate(
      id,
      { userId, showId, seats },
      { new: true }
    );
    res.json(updatedBooking);
 
};

// @desc Delete a booking
// @route DELETE /bookings/:id
// @access Public
const deleteBooking = async (req, res) => {
 
    const { id } = req.params;
    await Booking.findByIdAndDelete(id);
    res.json({ message: 'Booking deleted successfully' });
 
};

module.exports = {
  getAllBookings,
  createNewBooking,
  updateBooking,
  deleteBooking,
};
