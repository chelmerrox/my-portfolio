// Variable declarations
const nameMobile1 = document.getElementById('user-name-mobile');
const nameDesktop1 = document.getElementById('user-name-desktop');
const emailMobile1 = document.getElementById('user-email-mobile');
const emailDesktop1 = document.getElementById('user-email-desktop');
const commentMobile1 = document.getElementById('user-comments-mobile');
const commentDesktop1 = document.getElementById('user-comments-desktop');

// Variables to store the value of name, email & comment
let nameValueMobile1;
let emailValueMobile1;
let commentValueMobile1;
let nameValueDesktop1;
let emailValueDesktop1;
let commentValueDesktop1;

// Object to store values/data from user input in the form
let userinputDataMobile = {
  username: nameValueMobile1,
  useremail: emailValueMobile1,
  usercomment: commentValueMobile1,
};

let userinputDataDesktop = {
  username: nameValueDesktop1,
  useremail: emailValueDesktop1,
  usercomment: commentValueDesktop1,
};

// Function Declarations
// Function to store form inputs in local storage
function saveToLocalStorage(userinputDataForScreen) {
  // Serialization of the JS object to JSON (conversion to a string) & storing it in local storage
  const x = JSON.stringify(userinputDataForScreen);
  localStorage.setItem('userData', x);
}

function prefillFormFields(storedInput) {
  // Prefill mobile inputs in form
  nameMobile1.setAttribute('value', storedInput.username);
  emailMobile1.setAttribute('value', storedInput.useremail);
  commentMobile1.innerHTML = storedInput.usercomment;

  // Prefill desktop inputs in form with the user data from mobile
  nameDesktop1.setAttribute('value', storedInput.username);
  emailDesktop1.setAttribute('value', storedInput.useremail);
  commentDesktop1.innerHTML = storedInput.usercomment;
}

// Deserialization of the JSON string to a JS object & then getting user input from local storage
const storedInput = JSON.parse(localStorage.getItem('userData'));

// If local storage is not empty,
// then prefill the fields with the user data for mobile in local storage
// when page is refreshed/reloaded
if (storedInput !== null) {
  prefillFormFields(storedInput);
}

// For inputs in Mobile screen
nameMobile1.addEventListener('change', () => {
  // Accessing the name's value
  nameValueMobile1 = nameMobile1.value;

  // Object to store values/data from user input in the form
  userinputDataMobile = {
    username: nameValueMobile1,
    useremail: emailValueMobile1,
    usercomment: commentValueMobile1,
  };

  saveToLocalStorage(userinputDataMobile);
});

emailMobile1.addEventListener('change', () => {
  // Accessing the email's value
  emailValueMobile1 = emailMobile1.value;

  // Object to store values/data from user input in the form
  userinputDataMobile = {
    username: nameValueMobile1,
    useremail: emailValueMobile1,
    usercomment: commentValueMobile1,
  };

  saveToLocalStorage(userinputDataMobile);
});

commentMobile1.addEventListener('change', () => {
  // Accessing the comment's value
  commentValueMobile1 = commentMobile1.value;

  // Object to store values/data from user input in the form
  userinputDataMobile = {
    username: nameValueMobile1,
    useremail: emailValueMobile1,
    usercomment: commentValueMobile1,
  };

  saveToLocalStorage(userinputDataMobile);
});

// For inputs in Desktop screen
nameDesktop1.addEventListener('change', () => {
  // Accessing the name's value
  nameValueDesktop1 = nameDesktop1.value;

  // Object to store values/data from user input in the form
  userinputDataDesktop = {
    username: nameValueDesktop1,
    useremail: emailValueDesktop1,
    usercomment: commentValueDesktop1,
  };

  saveToLocalStorage(userinputDataDesktop);
});

emailDesktop1.addEventListener('change', () => {
  // Accessing the email's value
  emailValueDesktop1 = emailDesktop1.value;

  // Object to store values/data from user input in the form
  userinputDataDesktop = {
    username: nameValueDesktop1,
    useremail: emailValueDesktop1,
    usercomment: commentValueDesktop1,
  };

  saveToLocalStorage(userinputDataDesktop);
});

commentDesktop1.addEventListener('change', () => {
  // Accessing the comment's value
  commentValueDesktop1 = commentDesktop1.value;

  // Object to store values/data from user input in the form
  userinputDataDesktop = {
    username: nameValueDesktop1,
    useremail: emailValueDesktop1,
    usercomment: commentValueDesktop1,
  };

  saveToLocalStorage(userinputDataDesktop);
});