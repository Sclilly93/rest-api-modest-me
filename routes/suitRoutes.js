const express = require('express');
const router = express.Router();
const Suit = require('../models/suit');

// Add routes and middleware related to suits here
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));

router.post('/suits', (req, res) => {
    const { brand, color, size, price } = req.body;
    const newSuit = new Suit({ brand, color, size, price });
  
    newSuit.save((err) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.send('Suit added successfully.');
    });
  });


// Route for viewing available suit models in GET request
const app = express();

app.get('/suits', (req, res) => {
  Suit.find({}, (err, suits) => {
    if (err) return res.status(500).send(err);
    res.render('suits', { suits }); 
  });
});

// Route for viewing specific suit details in GET request
app.get('/suits/:suitId', (req, res) => {
  Suit.findById(req.params.suitId, (err, suit) => {
    if (err) return res.status(500).send(err);
    res.render('suitDetails', { suit }); 
  });
});

// Route for adding a suit to shopping cart in POST request
app.post('/cart/add', (req, res) => {
  const suitId = req.body.suitId;
  // Logic to add suit to user's cart
  res.send('Suit added to cart successfully.');
});

// Route for checkout and purchase suit in POST request
app.post('/cart/checkout', (req, res) => {
  // Logic to process the order and charge the user
  res.send('Order placed successfully.');
});

router.post('/purchase', (req, res) => {
    const suitId = req.body.suitId;
  
    Suit.findById(suitId, (err, suit) => {
      if (err) {
        return res.status(500).send(err);
      }
  
      if (!suit) {
        return res.status(404).send('Suit not found.');
      }
  
      // Logic for purchasing the suit
  
      res.send('Suit purchased successfully.');
    });
  });
  
module.exports = router;