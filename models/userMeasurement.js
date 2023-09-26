const mongoose = require('mongoose');

const measurementSchema = new mongoose.Schema({
  height: Number,
  weight: Number,
  shoeSize: Number,
  watchHand: String,
  skinColor: String,
  hairColor: String,
  eyeColor: String,
  jeanSize: Number
});

module.exports = mongoose.model('UserMeasurement', measurementSchema);
