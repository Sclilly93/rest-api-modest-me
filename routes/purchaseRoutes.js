const express = require('express');
const router = express.Router();
const Purchase = require('../models/purchase');

// These routes will handle incoming requests to save user information and purchases.

router.post('/purchase', async (req, res) => {
  try {
    const { userId, product } = req.body;

    const purchase = new Purchase({
      user: userId,
      product,
      // Add any other purchase information fields as needed
    });

    await purchase.save();

    res.status(201).json({ message: 'Purchase recorded successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
