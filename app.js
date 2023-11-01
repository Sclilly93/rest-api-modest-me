/* README: This file establishes the framework for processing user input, interfacing with a database, and handling incoming web page requests.
 *  
 * Import tool known as "express" to assist in the creation of web applications
 * Import tool called "mongoose" which assists us in interacting with a database.
 * Import tool called "body-parser" to help parse data from incoming requests and read data sent from web pages.
 */
// Import necessary modules and models
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const bodyParser = require('body-parser');
const { validateMeasurements } = require('./middleware/measurementMiddleware');


const app = express();

// Set up middleware
app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://Admin:ModestmeAPI93@api.dmomedi.mongodb.net/Node-API')
  .then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(4000, () => {
      console.log(`Node API app is running on http://localhost:4000`);
    });    
  })
  .catch((error) => {
    console.log(error);
  });

// Import models
const UserMeasurement = require('./models/userMeasurement'); 


// Import routes
const userRoutes = require('./routes/userRoutes');
const suitRoutes = require('./routes/suitRoutes');
const suitOptionsRoutes = require('./routes/suitOptionsRoutes');
const submitMeasurementsRoutes = require('./routes/submitMeasurementsRoutes');

// Use routes
app.use('/api', require('./routes/apiRoutes'));
app.use('/api', require('./routes/userRoutes'));
app.use('/api', require('./routes/purchaseRoutes'));
app.use('/user', userRoutes);
app.use('/suits', suitRoutes);
app.use('/suitOptions', suitOptionsRoutes);
app.use('/submitMeasurements', submitMeasurementsRoutes);



// Route to receive data from WordPress
app.post('/receiveDataFromWordPress', async (req, res) => {
  const { name, email, address, city, state, zip, phoneNumber, 
  neck, chest, shoulder, rightSleeve, leftSleeve, bicep, wrist, 
  waist, hip, frontJacket, frontChest, backWidth, shoulderWidthRight, 
  shoulderWidthLeft, fullBackLength, halfBackLength, trouserWaist, 
  trouserOutseam, trouserInseam, crotch, thigh, knee, rightFullSleeve, 
  leftFullSleeve, yourMessage } = req.body;

  // Create a new document in MongoDB
  const userMeasurement = new UserMeasurement({
    name, email, address, city, state, zip, phoneNumber, neck, chest, 
    shoulder, rightSleeve, leftSleeve, bicep, wrist, waist, hip, frontJacket, 
    frontChest, backWidth, shoulderWidthRight, shoulderWidthLeft, fullBackLength, 
    halfBackLength, trouserWaist, trouserOutseam, trouserInseam, crotch, thigh, knee, 
    rightFullSleeve, leftFullSleeve, yourMessage
  });

  await userMeasurement.save();

  res.send('Data saved to MongoDB');
});

// Define root routes
app.get('/', (req, res) => {
  res.send('Hello NODE API');
});

// Retrieve all suit options
app.get('/suitOptions', async (req, res) => {
  try {
    const suitOptions = await SuitOptions.find({});
    res.status(200).json(suitOptions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Retrieve a specific suit option by ID
app.get('/suitOptions/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const suitOption = await SuitOptions.findById(id);
    res.status(200).json(suitOption);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Handle POST request to /submitMeasurements
app.post('/submitMeasurements', (req, res) => {
  const measurements = req.body;

  // Create a new UserMeasurement document
  const measurementEntry = new UserMeasurement(measurements);

  // Save the document to the database
  measurementEntry.save()
    .then(() => {
      res.send('Measurements saved successfully'); // Send a response to the client
    })
    .catch(error => {
      res.status(500).send('Error saving measurements'); // Handle errors
    });
});



////

// Create a new suit option
app.post('/suitOptions', async (req, res) => {
  try {
    const newSuitOption = await SuitOptions.create(req.body);
    res.status(200).json(newSuitOption);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Update a suit option by ID
app.put('/suitOptions/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSuitOption = await SuitOptions.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedSuitOption) {
      return res.status(404).json({ message: `Cannot find any suit option with ID ${id}` });
    }
    res.status(200).json(updatedSuitOption);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete a suit option by ID
app.delete('/suitOptions/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSuitOption = await SuitOptions.findByIdAndDelete(id);
    if (!deletedSuitOption) {
      return res.status(404).json({ message: `Cannot find any suit option with ID ${id}` });
    }
    res.status(200).json(deletedSuitOption);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

