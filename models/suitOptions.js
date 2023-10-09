// README: this file defines Mongoose model for suit options. 
const mongoose = require('mongoose');

const suitOptionsSchema = new mongoose.Schema({
  title: String,
  color_options: [String]
});
const suitOptions = mongoose.model('SuitOptions', suitOptionsSchema);
module.exports = mongoose.model('SuitOptions', suitOptionsSchema);
