const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Included all the measurements from the survey form and mapped them to their respective keys
app.post('/submitMeasurements', (req, res) => {
  const measurements = {
    name: req.body['your-name'],
    email: req.body['your-email'],
    address: req.body['address'],
    city: req.body['City'],
    state: req.body['State'],
    zip: req.body['Zipcode'],
    phoneNumber: req.body['phoneNumber'],
    neck: req.body['Neck'],
    chest: req.body['FullChest'],
    shoulder: req.body['ShoulderWidth'],
    rightSleeve: req.body['RightSleeve'],
    leftSleeve: req.body['LeftSleeve'],
    bicep: req.body['Bicep'],
    wrist: req.body['Wrist'],
    waist: req.body['Waist'],
    hip: req.body['Hip'],
    frontJacket: req.body['FrontJacket'],
    frontChest: req.body['FrontChest'],
    backWidth: req.body['BackWidth'],
    shoulderWidthRight: req.body['ShoulderWidthRight'],
    shoulderWidthLeft: req.body['ShoulderWidthLeft'],
    fullBackLength: req.body['FullBackLength'],
    halfBackLength: req.body['HalfBackLength'],
    trouserWaist: req.body['TrouserWaist'],
    trouserOutseam: req.body['TrouserOutseam'],
    trouserInseam: req.body['TrouserInseam'],
    crotch: req.body['Crotch'],
    thigh: req.body['Thigh'],
    knee: req.body['Knee'],
    rightFullSleeve: req.body['RightFullSleeve'],
    leftFullSleeve: req.body['LeftFullSleeve'],
    yourMessage: req.body['your-message'],
  };

  // Save measurements to your database or perform any other actions
  // using your existing middleware or model functions.

  res.send('Measurements submitted successfully!');
});

module.exports = router;


