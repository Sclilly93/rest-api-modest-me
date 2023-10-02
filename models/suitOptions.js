// README: this file defines Mongoose model for suit options. 
const mongoose = require('mongoose');

const suitOptionsSchema = new mongoose.Schema({
  title: String,
  color_options: [String]
});

module.exports = mongoose.model('SuitOption', suitOptionsSchema);
