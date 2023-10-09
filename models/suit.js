/*
 * Defined Mongoose schema for suit with specific properties
 * This schema is used to create a model named suit
 */
const mongoose = require('mongoose');

// Define the Suit schema
const suitSchema = new mongoose.Schema({
  brand: String,
  color: String,
  size: String,
  price: Number,
});

// Create a Suit model using the schema
const Suit = mongoose.model('Suit', suitSchema);
module.exports = Suit;

