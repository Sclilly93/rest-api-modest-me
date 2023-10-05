// Import necessary modules and models
const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/productModel')
const app = express()

// Middleware to parse JSON and urlencoded data
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
// Define root route
app.get('/', (req, res) => {
    res.send('Hello NODE API')
})
// Define a sample blog route
app.get('/blog', (req, res) => {
    res.send('Hello Blog, My name is Devtamin')
})
// Retrieve all products
app.get('/products', async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
// Retrieve a specific product by ID
app.get('/products/:id', async(req, res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// Create a new product
app.post('/products', async(req, res) => {
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
app.delete('/products/:id', async(req, res) =>{
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

// Connect to MongoDB
mongoose.set("strictQuery", false)
mongoose.
connect('mongodb+srv://admin:12345678Admin@devtaminapi.zpncstm.mongodb.net/Node-API?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to MongoDB')
     // Start the server
    app.listen(3000, ()=> {
        console.log(`Node API app is running on port 3000`)
    });
}).catch((error) => {
    console.log(error)
})