// Event listener waits for the DOM content to finish loading before running the callback function's code.
document.addEventListener('DOMContentLoaded', () => {
    // Retrieves the email-specific input element from the DOM and sets it as the value of the variable emailInput.
    const emailInput = document.getElementById('email'); 
    // Assigns the variable submitButton with the button element with the ID submit that is obtained from the DOM.
    const submitButton = document.getElementById('submit'); 
    // Creates an event listener for the submit button click event.
    // The callback function is activated upon clicking the button.
    submitButton.addEventListener('click', async () => {
      // receives the value that the user entered in the email input field.
      const email = emailInput.value;
      const purchaseHistory = ['Item 1', 'Item 2']; // Example, you'd fetch this data dynamically
  
      // Makes a POST request to your server's /api/user endpoint. 
      // The email, previous purchases, and other details are all included in the request body. 
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, purchaseHistory, otherInfo: 'Additional Information' })
      });
      // If the response status is in the 200-299 range, it means the request was successful. 
      // In this case, it logs a success message.
      if (response.ok) {
        console.log('User information saved successfully');
      } else {
        const data = await response.json();
        console.error(data.error);
      }
    });
  });
  