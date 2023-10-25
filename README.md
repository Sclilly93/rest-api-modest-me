# rest-api-modestm-main
 MongoDB API for Wordpress a Clothing Store using express, node.js, and mongoose schema. 
 
# middleware 

If you find yourself in a situation where you require the use of a particular middleware function, import it into your route handlers or other areas of your application with the help of the require() method. 
This allows you to use the function efficiently within your codebase.
i.e.
const isAuthenticated = require('../middleware/authenticationMiddleware');
const errorHandler = require('../middleware/errorHandlerMiddleware');
const validateForm = require('../middleware/validationMiddleware');
const logger = require('../middleware/loggingMiddleware');

# recent commits 

* Refactored database to improve its readability, and maintainability.  
* Created valid instances for objects in suitOptions 
* Gave model access to save method
* Removed unnecessary quotes around properties names in object literals. 
* Updated suitOptions array to include the instances already created.
* The code now reads more clearly and follows a consistent style



//// Save the new SuitOption document to the MongoDB database
// Array containing the suit options you want to save.
const suitOptionsToSave = [
  newSuitOption1,
  newSuitOption2,
  newSuitOption3,
  newSuitOption4,
  newSuitOption5,
  newSuitOption6,
  newSuitOption7,
  newSuitOption8,
  newSuitOption9,
  newSuitOption10,
  // Add other newSuitOption objects similarly
];

  
// "Promise all" returns an array of results or throws an error if any of the promises are rejected.
// "Map" iterates through each suit option and calls the save method on each one. 
// This returns an array of promises.
// "Then" goes through the results and log a success message for each saved suit option.
  Promise.all(suitOptionsToSave.map(option => option.save({ timeout: 20000 })))
    .then(results => {
      results.forEach(result => {
        console.log('Suit option saved successfully:', result);
      });
    })
    .catch(error => {
      console.error(error);
    });