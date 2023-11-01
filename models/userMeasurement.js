// userMeasurement.js : This file is for defining the Contact Form 7 fields schema
const mongoose = require('mongoose');


// This is mapped to the MongoDB schema when sending data to your Node.js server.
const measurementSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  city: String,
  state: String,
  zip: Number,
  phoneNumber: String,
  neck: Number,
  chest: Number,
  waist: Number,
  hip: Number,
  shoulder: Number,
  rightSleeve: Number,
  bicep: Number,
  wrist: Number,
  shoulderWidthRight: Number,
  trouserWaist: Number,
  trouserOutseam: Number,
  trouserInseam: Number,
  halfBackLength: Number,
  frontJacket: Number,
  frontChest: Number,
  leftFullSleeve: Number,
  rightFullSleeve: Number,
  thigh: Number,
  knee: Number,
  crotch: Number,
  yourMessage: String,
});

module.exports = mongoose.model('UserMeasurement', measurementSchema);
