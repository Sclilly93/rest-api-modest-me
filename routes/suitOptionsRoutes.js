// This file handles routes and interactions with the related models
const express = require('express');
const router = express.Router();
// Import the Mongoose model for SuitOptions
const SuitOptions = require('../models/suitOptions');

// Add routes and handlers for suit options here
// Get all suit options
router.get('/', async (req, res) => {
  try {
    const suitOptions = await SuitOptions.find();
    res.status(200).json(suitOptions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get one suit option by ID
router.get('/:id', async (req, res) => {
  try {
    const suitOption = await SuitOptions.findById(req.params.id);
    if (!suitOption) {
      return res.status(404).json({ message: 'Suit option not found' });
    }
    res.status(200).json(suitOption);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new suit option
router.post('/', async (req, res) => {
  try {
    const newSuitOption = new SuitOptions({
      title: req.body.title,
      color_options: req.body.color_options
    });
    const savedSuitOption = await newSuitOption.save();
    res.status(201).json(savedSuitOption);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a suit option by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedSuitOption = await SuitOptions.findByIdAndUpdate(
      req.params.id,
      {
        title: req.body.title,
        color_options: req.body.color_options
      },
      { new: true }
    );
    if (!updatedSuitOption) {
      return res.status(404).json({ message: 'Suit option not found' });
    }
    res.status(200).json(updatedSuitOption);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a suit option by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedSuitOption = await SuitOptions.findByIdAndDelete(req.params.id);
    if (!deletedSuitOption) {
      return res.status(404).json({ message: 'Suit option not found' });
    }
    res.status(200).json(deletedSuitOption);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;



// Create a new instances of the SuitOption model with specific data
const newSuitOption1 = new SuitOptions({
  title: "Wool Blend 30",
  color_options: [
    "4008-01", "4008-02", "4008-03", "4008-04", "4008-05", 
    "4008-06", "4008-07", "4008-08", "4008-09", "4008-10", 
    "4008-11", "4008-12", "4008-13", "4008-14", "4008-15", "4008-16"
  ]
});

const newSuitOption2 = new SuitOptions({
  title: "Wool Blend 30",
  color_options: [
    "4008-17", "4008-18", "4008-19", "4008-20", "4008-21", 
    "4008-22", "4008-23", "4008-24", "4008-25", "4008-26", 
    "4008-27", "4008-28", "4008-29", "4008-30", "4008-31", "4008-32"
  ]
});   

const newSuitOption3 = new SuitOptions({
  title: "Wool Blend 30",
  color_options: [
    "4008-33", "4008-34", "4008-35", "4008-36", "4008-37", 
    "4008-38", "4008-39", "4008-40", "4008-41", "4008-42", 
    "4008-43", "4008-44", "4008-45", "4008-46", "4008-47", "4008-48"
  ]
});

const newSuitOption4 = new SuitOptions({
  title: "Wool Blend 30",
  color_options: [
    "4008-49", "4008-50", "4008-51", "4008-52", 
    "4008-53", "4008-54", "4008-55", "4008-56", "4008-57", 
    "4008-58", "4008-59", "4008-60", "4008-61", "4008-62"
  ]
});

const newSuitOption5 = new SuitOptions({
  title: "Classic",
  color_options: [
    "2199097", "2199099", "2199098", "2199001", "2199002", 
    "2199004", "2199003", "2199017", "2199018", "2199019"
  ]
});

const newSuitOption6 = new SuitOptions({
  title: "Classic",
  color_options: [
    "2199065", "2199067", "2199071", "2199066", "2199074", 
    "2199073", "2199058", "2199056", "2199072", "2199061"
  ]
});

const newSuitOption7 = new SuitOptions({
  title: "Classic",
  color_options: [
    "2199070", "2199069", "2199068", "2199055", "2199064", 
    "2199057", "2199059", "2199062", "2199060", "2199063"
  ]
});  
  
const newSuitOption8 = new SuitOptions({
  title: "Classic",
  color_options: [
    "2199031", "2199032", "2199033", "2199034", "2199092", 
    "2199091", "2199030", "2199029", "2199035", "2199037", "2199036"
  ]
}); 

const newSuitOption9 = new SuitOptions({
  title: "Classic",
  color_options: [
    "2199075", "2199077", "2199078", "2199076", "2199047", 
    "2199046", "2199049", "2199054", "2199051"
    ]
  });  

const newSuitOption10 = new SuitOptions({
  title: "Classic",
  color_options: [
    "2199050", "2199048", "2199053", "2199052", "2199044", 
    "2199045", "2199025", "2199026", "2199027", "2199028"
  ]
});   
  
// Create a new suit option
router.post('/', async (req, res) => {
  try {
    const existingOption = await SuitOptions.findOne({ title: req.body.title });

    if (existingOption) {
      // Update the existing option
      existingOption.color_options = req.body.color_options;
      const updatedOption = await existingOption.save();
      res.status(200).json(updatedOption);
    } else {
      // Create a new option
      const newSuitOption = new SuitOptions({
        title: req.body.title,
        color_options: req.body.color_options
      });
      const savedSuitOption = await newSuitOption.save();
      res.status(201).json(savedSuitOption);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


