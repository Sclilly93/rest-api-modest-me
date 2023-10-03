// Middleware: isAuthenticated
const isAuthenticated = (req, res, next) => {
    // Check if the user is authenticated (logged in)
    if (req.isAuthenticated()) {
      // If authenticated, return to the next middleware or route
      return next();
    }
    // If not authenticated, redirect the user to the login page
    res.redirect('/login');
  };
  
  // Export the is Authenticated middleware
  export default isAuthenticated;