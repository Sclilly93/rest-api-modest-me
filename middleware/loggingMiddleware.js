// Middleware: logger
const logger = (req, res, next) => {
    // Log the HTTP method and URL to the console
    console.log(`${req.method} ${req.url}`);
    
    // Continue with the next middleware or route
    next();
  };
  
  // Export the logger middleware
  module.exports = logger;