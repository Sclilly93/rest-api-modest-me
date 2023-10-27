const mongoose = require('mongoose');


// model to save a report to database for user measurement survey completion
const reportSchema = new mongoose.Schema({
  userEmail: String,
  measurements: Object // This can be adjusted based on your report structure
});

module.exports = mongoose.model('Report', reportSchema);
