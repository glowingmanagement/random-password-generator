// get form inputs on submit
let chosenCharacters = [];
let passwordLength = 8;
let websiteChosen = "";
const characterChoice = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  " ",
  "!",
  "£",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "#",
  "@",
];
let generatedPassword = [];

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
  generatedPassword = [];
  name.forEach((element) => isChecked(element));
  passwordLength = $("#character-length").val();
  websiteChosen = $("#websiteInput").val();

  const isValidated = validateForm();
  console.log(isValidated);

  if (isValidated) {
    for (let i = 0; i < passwordLength - chosenCharacters.length; i += 1) {
      // choose random number between 1 & length of array to determine which character type to use
      const randomCharacter = getRandomNumber(0, chosenCharacters.length);
      console.log(chosenCharacters);
      const passwordCharacter = chosenCharacters[randomCharacter];

      getRandomCharacters(passwordCharacter, generatedPassword);
    }
    console.log(generatedPassword);
  }
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

const addEachCharacter = () => {};

const getRandomCharacters = (passwordCharacter, generatedPassword) => {
  // get random character of the chosen type and add it to array
  if (passwordCharacter === "lowercase-choice") {
    generatedPassword.push(characterChoice[getRandomNumber(0, 26)]);
  } else if (passwordCharacter === "uppercase-choice") {
    generatedPassword.push(
      characterChoice[getRandomNumber(0, 26)].toUpperCase()
    );
  } else if (passwordCharacter === "numeric-choice") {
    generatedPassword.push(characterChoice[getRandomNumber(26, 36)]);
  } else if (passwordCharacter === "special-choice") {
    generatedPassword.push(
      characterChoice[getRandomNumber(36, characterChoice.length)]
    );
  }
};

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min) + min);
};

// store password in local storage

// change page on click of button to view saved passwords

$("#optionForm").submit(handleSubmit);
