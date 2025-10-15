
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
      // Next step would be placing the sentences in variables
      // And then displaying each variable in a p-tag in the html

      console.log(formObject);
      let pTag1 =`I’m ${formObject.lname}, ${formObject.fname} ${formObject.lname}. But you can call me Baby ${formObject.fname.slice(0,3)}. Yeah, I’m ${formObject.adjective.toLowerCase()} like that ;)`;
      console.log(pTag1);
      let pTag2 = `What am I looking for in a partner? Well, like most people, I’d like to meet someone who's a ${formObject.animal.toLowerCase()} in the streets and a ${formObject.occupation.toLowerCase()} in the sheets.`;
      console.log(pTag2);
      let pTag3 = `Maybe you could teach me ${formObject.subject.toLowerCase()}, maybe while wearing nothing but a ${formObject.fruit.toLowerCase()} shaped hat.`;
      console.log(pTag3);
      let pTag4 = `But let’s start small, huh? Hmu if you want to get a coffee or something.`;
      console.log(pTag4);
});

/*

// Create function in listener that creates h2 tag "Your new tinder bio"

// Create function that places values from the object into p-tags and displays them in div

// Add this function to the submit listener

// Create variable for reset button

const resetButton = document.getElementById("reset");


// Create listener for click on reset button, add functionality so that the form resets


*/
