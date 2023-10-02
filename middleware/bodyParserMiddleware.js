// This middleware is used to parse incoming POST requesnpmts with URL-encoded data.

// Install using 'npm install body-parser'

const bodyParser = require('body-parser');

// Create a middleware function to parse incoming requests
const parseRequestBody = () => {
  return bodyParser.urlencoded({ extended: true });
};

// Export the middleware function
module.exports = parseRequestBody;
