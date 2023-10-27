// userMeasurement.js : This file for defining the Mongoose schema
const mongoose = require('mongoose');

const measurementSchema = new mongoose.Schema({
  name: String,
  email: String,
  neck: Number,
  chest: Number,
  shoulder: Number,
  rightSleeve: Number,
  leftSleeve: Number,
  bicep: Number,
  wrist: Number,
  waist: Number,
  hip: Number,
  frontJacket: Number,
  frontChest: Number,
  backWidth: Number,
  shoulderWidthRight: Number,
  shoulderWidthLeft: Number,
  fullBackLength: Number,
  halfBackLength: Number,
  trouserWaist: Number,
  trouserOutseam: Number,
  trouserInseam: Number,
  crotch: Number,
  thigh: Number,
  knee: Number,
  rightFullSleeve: Number,
  leftFullSleeve: Number,
});

module.exports = mongoose.model('UserMeasurement', measurementSchema);
