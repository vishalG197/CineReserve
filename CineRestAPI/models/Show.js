// models/show.js
const mongoose = require('mongoose');

const showSchema = new mongoose.Schema({
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  seatBookings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Booking',
  }],
});

const Show = mongoose.model('Show', showSchema);

module.exports = Show;
