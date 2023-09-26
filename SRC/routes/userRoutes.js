const express = require('express');
const router = express.Router();
const UserMeasurement = require('../models/userMeasurement'); // Require the schema

router.post('/submit-measurements', (req, res) => {
  const { height, weight, shoeSize, watchHand, skinColor, hairColor, eyeColor, jeanSize } = req.body;

  const newUserMeasurement = new UserMeasurement({
    height,
    weight,
    shoeSize,
    watchHand,
    skinColor,
    hairColor,
    eyeColor,
    jeanSize
  });

  newUserMeasurement.save((err) => {
    if (err) return res.status(500).send(err); // Handle the error
    res.send('User measurement saved successfully.');
  });
});

module.exports = router;
