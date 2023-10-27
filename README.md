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

  * Optional Survey form!

     <div class="form-group">
          <p>Which option best describes your needs for a custom suit?</p>
          <select id="dropdown" name="role" class="form-control" required>
            <option disabled selected value>Select your needs</option>
            <option value="student">Wedding</option>
            <option value="job">Bussiness</option>
            <option value="fashion">Fashion</option>
            <option value="preferNo">Prefer not to say</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="form-group">
          <p>Would you recommend Modest Me?</p>
          <label>
            <input
              name="user-recommend"
              value="absolutely"
              type="radio"
              class="input-radio"
              checked
            />Absolutely</label
          >
          <label>
            <input
              name="user-recommend"
              value="maybe"
              type="radio"
              class="input-radio"
            />Maybe</label
          >

          <label
            ><input
              name="user-recommend"
              value="not-currently"
              type="radio"
              class="input-radio"
            />Not currently</label
          >
        </div>

        <div class="form-group">
          <p>What is your favorite feature or highlight of Modest Me?</p>
          <select id="favorite-feature" name="favoriteFeature" class="form-control" required>
            <option disabled selected value>Select an option</option>
            <option value="designs">Designs</option>
            <option value="featured-clothes">Featured Clothes</option>
            <option value="diversity">Diversity</option>
            <option value="new-collections">New Collections</option>
          </select>
        </div>

        <div class="form-group">
          <p>
            What future updates intrest you?
            <span class="clue">(Check any that apply)</span>
          </p>

          <label
            ><input
              name="prefer"
              value="community-projects"
              type="checkbox"
              class="input-checkbox"
            />Upcoming Categories</label
          >
          <label>
            <input
              name="prefer"
              value="upcoming-reviews"
              type="checkbox"
              class="input-checkbox"
            />Customer Reviews</label>
          <label
            ><input
              name="prefer"
              value="concept-art"
              type="checkbox"
              class="input-checkbox"
            />Unisex Clothing</label>
          <label
            ><input
              name="prefer"
              value="challenges"
              type="checkbox"
              class="input-checkbox"
            />Measurements Sidebar</label
            >
          <label
            ><input
              name="prefer"
              value="video-content"
              type="checkbox"
              class="input-checkbox"
            />Shipping Updates</label
            >
          <label
            ><input
              name="prefer"
              value="forum"
              type="checkbox"
              class="input-checkbox"
            />Blog</label
          >
          <label
            ><input
              name="prefer"
              value="additional-courses"
              type="checkbox"
              class="input-checkbox"
            />Additional Search Features</label
          >
        </div>

        <div class="form-group">
          <p>Any additional feedback or requests?</p>
          <textarea
            id="comments"
            class="input-textarea"
            name="comment"
            placeholder="Enter your comment here..."
          ></textarea>
        </div>