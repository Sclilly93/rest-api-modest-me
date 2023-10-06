// README: This file is a router handler for submitting user measurements 

/*
 * Import the 'express' module, web framework for Node.js
 * Create a new router instance, group related routes and middleware together
 * Imports the UserMeasurement schema from the models directory
 */
const express = require('express');
const router = express.Router();
const UserMeasurement = require('../models/userMeasurement'); // Require the schema
const User = require('../models/User')

// Define routes for creating users and recording purchases using ping method
router.post('/user', async (req, res) => {
  try {
    const { username, email } = req.body;

    const user = new User({
      username,
      email,
      // Add any other user information fields as needed
    });

    await user.save();

    res.status(201).json({ message: 'User information saved successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

// Define a route that handles POST requests to '/submit-measurements'endpoint
// After POST request reaches endpoint, the function (req, res) will be executed 
router.post('/submit-measurements', (req, res) => {
  // Destructures properties to extract properties from the request body
  const { height, weight, shoeSize, watchHand, skinColor, hairColor, eyeColor, jeanSize } = req.body;

  // Create a new instance of UserMeasurement with the recieved properties from user data
  const newUserMeasurement = new UserMeasurement({
    height,
    weight,
    shoeSize,
    watchHand,
    hairColor,
    eyeColor,
    jeanSize
  });

  // Saves the new user measurement to the database and check if an error occured during the save opperation
  newUserMeasurement.save((err) => {
    if (err) return res.status(500).send(err); // Handle the error
    // If no error, send a success message
    res.send('User measurement saved successfully.');
  });
});


// Route to find measurements with 'Brown' as the hair color
// Query for difere
router.get('/measurements/brown-hair', (req, res) => {
  UserMeasurement.find({ hairColor: 'Brown' }, (err, measurements) => {
    if (err) return res.status(500).send(err); // Handle the error
    res.send(measurements);
  });
});

// Route to find measurements with 'Blue' as the eye color
router.get('/measurements/blue-eyes', (req, res) => {
  UserMeasurement.find({ eyeColor: 'Blue' }, (err, measurements) => {
    if (err) return res.status(500).send(err); // Handle the error
    res.send(measurements);
  });
});


// Export the router instance to make it available for use in other parts of the application
module.exports = router;




// Find Similar Users

const { pearsonCorrelation } = require('../utils/recommendationUtils');

function findSimilarUsers(targetUser, numUsers, userItemMatrix, userMeans) {
  // Implementation of findSimilarUsers function...
}

// Further processing or passing data to the next step...

// Recommend Items
// Optional: function recommendItems(targetUser: any)
