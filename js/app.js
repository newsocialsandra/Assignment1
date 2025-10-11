
// Creating a variable for the form
const form = document.getElementById("infoForm");

// Adding event listener for submit button
form.addEventListener("submit", (event) => {
      // Preventing the form from reloading page
      event.preventDefault();
      // Creating new FormData object based on values from the form
      const formData = new FormData(form);

      // Creating regular object and saving key values from formData in it
      const formObject = {};

      formData.forEach((value, key) => {
        formObject[key] = value;
      });

      // Console logging key value pairs from formObject
      console.log(formObject);
});


/*

// Create function that places values from the object into p-tags and displays them in div

// Add this function to the submit listener

// Create variable for reset button

const resetButton = document.getElementById("reset");


// Create listener for click on reset button, add functionality so that the form resets


*/
