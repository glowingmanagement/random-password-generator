// get form inputs on submit
let chosenCharacters = [];
let passwordLength = 8;
let websiteChosen = "";

// onSubmit view user data and add to variables
const handleSubmit = (event) => {
  event.preventDefault();
  const name = [
    "lowercase-choice",
    "uppercase-choice",
    "numeric-choice",
    "special-choice",
  ];
  chosenCharacters = [];
  name.forEach((element) => isChecked(element));
  passwordLength = $("#character-length").val();
  websiteChosen = $("#websiteInput").val();

  const isValidated = validateForm();
  console.log(isValidated);
};

const isChecked = (name) => {
  if ($(`#${name}`).is(":checked")) {
    chosenCharacters.push(name);
  }
};

const validateForm = () => {
  const errorText = $("#error");
  if (!passwordLength) {
    errorText.text("Error - Please enter a valid password length");
    errorText.removeClass("hide");
    return false;
  } else if (passwordLength < 8 || passwordLength > 128) {
    errorText.text("Error - Please enter a password length between 8 and 128");
    errorText.removeClass("hide");
    return false;
  } else if (chosenCharacters.length === 0) {
    errorText.text("Error - Please choose at least 1 type of character");
    errorText.removeClass("hide");
    return false;
  } else if (websiteChosen === "") {
    errorText.text("Error - Please enter a website");
    errorText.removeClass("hide");
    return false;
  } else {
    errorText.addClass("hide");
    return true;
  }
};

// generate random password

// store password in local storage

// change page on click of button to view saved passwords

$("#optionForm").submit(handleSubmit);
