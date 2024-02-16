// models/seat.js
const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
  movieId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
    required: true,
  },
  showId:{
   type: mongoose.Schema.Types.ObjectId,
   ref: 'Movie',
   required: true,
  },
  userId:{
   type: mongoose.Schema.Types.ObjectId,
   ref: 'Movie',
   required: true,
  },
  row: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['available', 'booked'],
    default: 'booked',
  },
});

const Seat = mongoose.model('Seat', seatSchema);

module.exports = Seat;
