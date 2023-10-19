// Import the Mongoose library, which provides a schema-based solution for modeling MongoDB documents.
const mongoose = require('mongoose');

// Define a purchase schema using Mongoose's schema constructor. This defines the structure of a purchase document.
const purchaseSchema = new mongoose.Schema(
  {
  // The 'user' field is of type ObjectId, referencing the 'User' model. It establishes a relationship between purchases and users.
      user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
      },
  // The 'product' field is of type String and is required. It represents the purchased product
      product: { 
        type: String, 
        required: true 
      },
      quantity: {
        type: Number,
        required: true,
        default: 0
      },
      price: {
        type: Number,
        required: true,
      }
   // Add any other purchase information fields as needed. For example:
  // additionalInfo: { type: String, required: false }
  },
  {
      timestamps: true
  }
);

// Create a Mongoose model named 'Purchase' based on the defined purchase schema.
const Purchase = mongoose.model('Purchase', purchaseSchema);

// Export the 'Purchase' model to make it available for use in other parts of the application.
module.exports = mongoose.model('Purchase', purchaseSchema);
