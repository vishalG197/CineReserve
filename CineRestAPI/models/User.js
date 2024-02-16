const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
   username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
   
    roles: {
      type: [String],
      enum: ['user', 'manager',"admin"],
      default: ['user'],
    },
    maxSeatsAllowed: {
      type: Number,
      default: 4, 
    },
    active: {
      type: Boolean,
      default: true,
    },
    facebookId: {
      type: String,
      unique: true,
      sparse: true,
    },
    googleId: {
      type: String,
      unique: true,
      sparse: true,
    },
})

module.exports = mongoose.model("User",userSchema);
