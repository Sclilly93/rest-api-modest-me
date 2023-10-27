const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));


// Included all the measurements from the survey form and mapped them to their respective keys
app.post('/submitMeasurements', (req, res) => {
  const measurements = {
    name: req.body.name,
    email: req.body.email,
    neck: req.body.neck,
    chest: req.body.chest,
    shoulder: req.body.shoulder,
    rightSleeve: req.body['right-sleeve'],
    leftSleeve: req.body['left-sleeve'],
    bicep: req.body.bicep,
    wrist: req.body.wrist,
    waist: req.body.waist,
    hip: req.body.hip,
    frontJacket: req.body['front-jacket'],
    frontChest: req.body['front-chest'],
    backWidth: req.body['back-width'],
    shoulderWidthRight: req.body['shoulder-width-right'],
    shoulderWidthLeft: req.body['shoulder-width-left'],
    fullBackLength: req.body['full-back-length'],
    halfBackLength: req.body['half-back-length'],
    trouserWaist: req.body['trouser-waist'],
    trouserOutseam: req.body['trouser-outseam'],
    trouserInseam: req.body['trouser-inseam'],
    crotch: req.body.crotch,
    thigh: req.body.thigh,
    knee: req.body.knee,
    rightFullSleeve: req.body['right-full-sleeve'],
    leftFullSleeve: req.body['left-full-sleeve'],
  };

  // Save measurements to your database or perform any other actions
  // using your existing middleware or model functions.

  res.send('Measurements submitted successfully!');
});


// This sets up a path for our database to recieve measurements after a form has been submitted
// Also sends out email to factory for completed user measurements survey.  
const nodemailer = require('nodemailer');

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

app.post('/submitMeasurements', (req, res) => {
  // Your existing code for extracting measurements from req.body...

  // Save measurements to the database
  const userMeasurements = new UserMeasurement(measurements);
  userMeasurements.save((err, data) => {
    if (err) {
      // Handle error
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }

    // Send confirmation to the client
    res.send('Measurements submitted successfully!');

    // Send email to manufacturer
    const mailOptions = {
      from: 'your-email@gmail.com',
      to: 'manufacturer-email@example.com',
      subject: 'New Measurements Submitted',
      text: `New measurements submitted:\n${JSON.stringify(measurements, null, 2)}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  });
});


module.exports = router;

// This save's the report after sending the email:

const Report = require('../models/reportModel');

// ...

app.post('/submitMeasurements', (req, res) => {
  // Your existing code for extracting measurements from req.body...

  // Save measurements to the database
  const userMeasurements = new UserMeasurement(measurements);
  userMeasurements.save((err, data) => {
    if (err) {
      // Handle error
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }

    // Send confirmation to the client
    res.send('Measurements submitted successfully!');

    // Send email to manufacturer (as shown in previous step)

    // Save report to database
    const report = new Report({
      userEmail: measurements.email,
      measurements: measurements
    });

    report.save((err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Report saved to database:', data);
      }
    });
  });
});
