
// Creating a variable for the form we want to get values from
const form = document.getElementById("infoForm");

// Creating a variable for the div we want to place new text in
let resultDiv = document.getElementById("result");

// Creating a function that creates an h2-tag in the div
function createH2Tag(stringIn) {
  let para = document.createElement("h2");
  para.textContent = stringIn;
  resultDiv.appendChild(para);
}

// Creating a function that creates p-tags in the div
function createPTag(stringIn) {
  let para = document.createElement("p");
  para.textContent = stringIn;
  resultDiv.appendChild(para);
}

// Creating a variable for the reset button
const resetButton = document.getElementById("reset");

// Creating a function that removes all values from form fields when pressing reset button

const idList = ["fname", "lname", "adjective", "animal", "occupation", "subject", "fruit"];


resetButton.addEventListener("click", () => {
  for (let i = 0; i < idList.length; i++) {
    resetValue = document.getElementById("lname");
    resetValue.value = resetValue.innerHTML;
  }
})

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
      let pTag2 = `What am I looking for in a partner? Well, like most people, I’d like to meet someone who's a ${formObject.animal.toLowerCase()} in the streets and a ${formObject.occupation.toLowerCase()} in the sheets.`;
      let pTag3 = `Maybe you could teach me ${formObject.subject.toLowerCase()}, maybe while wearing nothing but a ${formObject.fruit.toLowerCase()} shaped hat ;)`;
      let pTag4 = `But let’s start small, huh? Hmu if you want to get a coffee or something.`;

      createH2Tag("Behold! Your new Tinder bio:");
      createPTag(pTag1);
      createPTag(pTag2);
      createPTag(pTag3);
      createPTag(pTag4);


});

/*

// Create function in listener that creates h2 tag "Your new tinder bio"

// Create function that places values from the object into p-tags and displays them in div

// Add this function to the submit listener

// Create variable for reset button

const resetButton = document.getElementById("reset");


// Create listener for click on reset button, add functionality so that the form resets


*/
