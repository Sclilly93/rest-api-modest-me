// Middleware: validateForm
const validateForm = (req, res, next) => {
    // Extract name, email, and ...
    // {const name, email, ect...}
  
    // Check if any of the fields are missing
    if (!name || !email || !password) {
      // If any field is missing, send a 400 Bad Request response with an error message
      return res.status(400).send('Please fill in all fields.');
    }
    // If all fields are present, continue with the next middleware or route
    next();
  };
  
  // Export the validateForm middleware
  module.exports = validateForm;