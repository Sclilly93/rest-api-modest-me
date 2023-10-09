/*
* This file specifies the MongoDB user data schema.
* It states that a user document must include an email address, 
* a list of past purchases, and an optional field for extra details.
 */

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    email: { 
        type: String, 
        required: true, 
    },
    purchaseHistory: [
      { type: String }
    ],
    otherInfo: { 
        type: String, 
  } 
   // Add any other user information fields as needed


  },
  {
    timestamps: true,
  } 
);

const User = mongoose.model('User', userSchema);
module.exports = mongoose.model('User', userSchema);


