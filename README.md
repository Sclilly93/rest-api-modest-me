# rest-api-modestm
 Mongodb
# rest-api-modestm-main
 MongoDB API for Wordpress a Clothing Store using express, node.js, and mongoose schema. 
 
# middleware 
If you find yourself in a situation where you require the use of a particular middleware function, import it into your route handlers or other areas of your application with the help of the require() method. This allows you to use the function efficiently within your codebase.
i.e.
const isAuthenticated = require('../middleware/authenticationMiddleware');
const errorHandler = require('../middleware/errorHandlerMiddleware');
const validateForm = require('../middleware/validationMiddleware');
const logger = require('../middleware/loggingMiddleware');