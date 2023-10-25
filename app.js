/* README: This file establishes the framework for processing user input, interfacing with a database, and handling incoming web page requests.
 *  
 * Import tool known as "express" to assist in the creation of web applications
 * Import tool called "mongoose" which assists us in interacting with a database.
 * Import tool called "body-parser" to help parse data from incoming requests and read data sent from web pages.
 */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // Require body-parser

// Create a new web application using the "express" tool and call it "app".
const app = express();

// Import input routes from a separate file in "routes" directory.
const userRoutes = require('./routes/userRoutes');
const suitRoutes = require('./routes/suitRoutes');
const suitOptionsRoutes = require('./routes/suitOptionsRoutes');

// Middleware for parsing JSON
app.use(express.json());

// Serve static files from the public folder
app.use(express.static('public'));

// Define routes
app.use('/api', require('./routes/apiRoutes'));
app.use('/api', require('./routes/userRoutes'));
app.use('/api', require('./routes/purchaseRoutes'));

// Use "body-parser" for processing data transmitted in varying formats including URL-encoded and JSON.
// This sets up our middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Configure the web application to utilize the specified routes when processing requests directed to user or suit routes.
app.use('/user', userRoutes); 
app.use('/suits', suitRoutes);
app.use('/suits', suitOptionsRoutes);


//  bodyParserMiddleware.js code setup for import and use
const parseRequestBody = require('./middleware/bodyParserMiddleware'); // Adjust the path as needed

// Use the bodyParser middleware for parsing incoming requests
app.use(parseRequestBody());
app.use(bodyParser.json());





// Other middleware and routes...
// Define root route
app.get('/', (req, res) => {
  res.send('Hello NODE API')
})

// Retrieve all products
app.get('/suitOptions', async(req, res) => {
  try {
      const products = await Product.find({});
      res.status(200).json(products);
  } catch (error) {
      res.status(500).json({message: error.message})
  }
})

// Retrieve a specific product by ID
app.get('/suitOptions/:id', async(req, res) =>{
  try {
      const {id} = req.params;
      const product = await Product.findById(id);
      res.status(200).json(product);
  } catch (error) {
      res.status(500).json({message: error.message})
  }
})

// Create a new product
app.post('/suitOptions', async(req, res) => {
  try {
      const product = await Product.create(req.body)
      res.status(200).json(product);
      
  } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
  }
})

// Update a product by ID
app.put('/products/:id', async(req, res) => {
  try {
      const {id} = req.params;
      const product = await Product.findByIdAndUpdate(id, req.body);
      // we cannot find any product in database
      if(!product){
          return res.status(404).json({message: `cannot find any product with ID ${id}`})
      }
      const updatedProduct = await Product.findById(id);
      res.status(200).json(updatedProduct);
      
  } catch (error) {
      res.status(500).json({message: error.message})
  }
})
  
// Delete a product by ID
app.delete('/suitOptions/:id', async(req, res) =>{
  try {
      const {id} = req.params;
      const product = await Product.findByIdAndDelete(id);
      if(!product){
          return res.status(404).json({message: `cannot find any product with ID ${id}`})
      }
      res.status(200).json(product);
      
  } catch (error) {
      res.status(500).json({message: error.message})
  }
})



app.post('/suitOptions', (req, res) => {
    console.log(request.body);
})

// Start the web server and stand by to receive incoming requests on port 3000.

// Connect our web application to a MongoDB local database located on our own computer
mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://Admin:ModestmeAPI93@api.dmomedi.mongodb.net/Node-API')
.then(() => {
  console.log('Connected to MongoDB')
   // Start the server
  app.listen(3000, ()=> {
      console.log(`Node API app is running on http://localhost:3000`)
  });
}).catch((error) => {
  console.log(error)
})
