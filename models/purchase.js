const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  product: { type: String, required: true },
  // Add any other purchase information fields as needed
});

module.exports = mongoose.model('Purchase', purchaseSchema);
