const mongoose = require('mongoose');

const seatBookingSchema = new mongoose.Schema({
   showId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Show',
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    movieId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movie',
      required: true,
    },
    seats: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Seat',
      required: true,
    }],
    timestamp: {
      type: Date,
      default: Date.now,
    },
});

const SeatBooking = mongoose.model('SeatBooking', seatBookingSchema);

module.exports = SeatBooking;
