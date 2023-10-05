/* 
 * This file defines a route at /api/user that expects a POST request.
 * It extracts the necessary data (email, purchase history, 
 * and other info) from the request body and uses it to create a new user document in the MongoDB database.
 */
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Endpoint to save user information
router.post('/user', async (req, res) => {
  try {
    const { email, purchaseHistory, otherInfo } = req.body;

    const user = new User({
      email,
      purchaseHistory,
      otherInfo
    });

    await user.save();

    res.status(201).json({ message: 'User information saved successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
