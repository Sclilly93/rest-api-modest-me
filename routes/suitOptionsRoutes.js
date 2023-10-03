// This file handles routes and interactions with the related models
const express = require('express');
const router = express.Router();

// Import the Mongoose model for SuitOptions
const SuitOption = require('../models/suitOptions');

// Add routes and handlers for suit options here
module.exports = router;



// Create a new instances of the SuitOption model with specific data
const newSuitOption1 = new SuitOption({
  "title": "Wool Blend 30",
  "color_options": ["4008-01", "4008-02", "4008-03", "4008-04", "4008-05", "4008-06", "4008-07", "4008-08", "4008-09", "4008-10", "4008-11", "4008-12", "4008-13", "4008-14", "4008-15", "4008-16"]
  });

const newSuitOption2 = new SuitOption({
  "title": "Wool Blend 30",
  "color_options": ["4008-17", "4008-18", "4008-19", "4008-20", "4008-21", "4008-22", "4008-23", "4008-24", "4008-25", "4008-26", "4008-27", "4008-28", "4008-29", "4008-30", "4008-31", "4008-32"]
  });  

const new_SuitOption3 = new SuitOption({
  "title": "Wool Blend 30",
  "color_options": ["4008-17", "4008-18", "4008-19", "4008-20", "4008-21", "4008-22", "4008-23", "4008-24", "4008-25", "4008-26", "4008-27", "4008-28", "4008-29", "4008-30", "4008-31", "4008-32"]
  });  

const newSuitOption4 = new SuitOption({
  "title": "Wool Blend 30",
  "color_options": ["4008-33", "4008-34", "4008-35", "4008-36", "4008-37", "4008-38", "4008-39", "4008-40", "4008-41", "4008-42", "4008-43", "4008-44", "4008-45", "4008-46", "4008-47", "4008-48", "4008-48"]
  });

const newSuitOption5 = new SuitOption({
  "title": "Wool Blend 30",
  "color_options": ["4008-49", "4008-50", "4008-51", "4008-52", "4008-53", "4008-54", "4008-55", "4008-56", "4008-57", "4008-58", "4008-59", "4008-60", "4008-61", "4008-62"]
  });

const newSuitOption6 = new SuitOption({
  "title": "Classic",
  "color_options": ["2199097", "2199099", "2199098", "2199001", "2199002", "2199004", "2199003", "2199017", "2199018", "2199019"]
  });

const newSuitOption7 = new SuitOption({
  "title": "Classic",
  "color_options": ["2199065", "2199067", "2199071", "2199066", "2199074", "2199073", "2199058", "2199056", "2199072", "2199061"]
  });

const newSuitOption8 = new SuitOption({
  "title": "Classic",
  "color_options": ["2199070", "2199069", "2199068", "2199055", "2199064", "2199057", "2199059", "2199062", "2199060", "2199063"]
  });  
  
const newSuitOption9 = new SuitOption({
  "title": "Classic",
  "color_options": ["2199031", "2199032", "2199033", "2199034", "2199092", "2199091", "2199030", "2199029", "2199035", "2199037", "2199036"]
  }); 

const newSuitOption10 = new SuitOption({
  "title": "Classic",
  "color_options": ["2199075", "2199077", "2199078", "2199076", "2199047", "2199046", "2199049", "2199054", "2199051"]
  });  

const newSuitOption11 = new SuitOption({
  "title": "Classic",
  "color_options": ["2199050", "2199048", "2199053", "2199052", "2199044", "2199045", "2199025", "2199026", "2199027", "2199028"]
  });   
  
// Save the new SuitOption document to the MongoDB database
newSuitOption.save((err, result) => {
  // Check if there was an error during the save operation
  if (err) {
    // If an error occurred, log it to the console
    console.error(err);
  } else {
    // If the save was successful, log a success message and the result
    console.log('Suit option saved successfully:', result);
  }
});