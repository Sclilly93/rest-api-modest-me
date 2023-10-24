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