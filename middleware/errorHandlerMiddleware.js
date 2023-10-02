const errorHandler = (err, req, res, next) => {
    // Log the error stack trace to the console
    console.error(err.stack);
  
    // Send a 500 Internal Server Error response with a generic error message
    res.status(500).send('Something went wrong!');
  };
  
  // Export the errorHandler middleware
  module.exports = errorHandler;