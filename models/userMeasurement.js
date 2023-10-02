//README: This file for defining the Mongoose schema

// Load a tool called "mongoose" that helps us work with a database
const mongoose = require('mongoose');

/*
 * Defines a blueprint for how we'll save measurements in the database.
 * The blueprint includes categories like "height", "weight", etc.
 */
const measurementSchema = new mongoose.Schema({
  height: Number,
  weight: Number,
  shoeSize: Number,
  watchHand: String,
  hairColor: String,
  eyeColor: String,
  jeanSize: Number
});

// Export this blueprint so we can use it elsewhere in our code.
// We'll call it "UserMeasurement" and it follows the blueprint we just defined.
module.exports = mongoose.model('UserMeasurement', measurementSchema);