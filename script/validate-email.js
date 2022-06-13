// Variable delcarations
const formMobile = document.getElementById('form-mobile');
const formDesktop = document.getElementById('form-desktop');
const nameMobile = document.getElementById('user-name-mobile');
const nameDesktop = document.getElementById('user-name-desktop');
const emailMobile = document.getElementById('user-email-mobile');
const emailDesktop = document.getElementById('user-email-desktop');
const commentMobile = document.getElementById('user-comments-mobile');
const commentDesktop = document.getElementById('user-comments-desktop');

// Referencing the <small> element in mobile & desktop screens that displays the error message
const errorContainerMobile = document.getElementById('error-container-mobile');
const errorContainerDesktop = document.getElementById('error-container-desktop');

// Regex for email that doesn't contain A-Z letters
const emailPattern = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;

// Function Declarations
function setErrorMessage(errorContainer, inputForScreen, msg = '') {
  errorContainer.classList.remove('success');
  errorContainer.classList.add('error');
  inputForScreen.classList.add('error-border');
  errorContainer.innerHTML = msg;
}

function setSuccessMessage(errorContainer, inputForScreen, msg = '') {
  errorContainer.classList.remove('error');
  inputForScreen.classList.remove('error-border');
  errorContainer.classList.add('success');
  errorContainer.innerHTML = msg;
}

function validateEmail(emailForScreen, emailValue, errorContainer) {
  if (emailValue === '' || emailValue === null) {
    setErrorMessage(errorContainer, emailForScreen, 'Please enter an email address.');
  } else if (!emailValue.match(emailPattern)) {
    setErrorMessage(errorContainer, emailForScreen, 'Please enter an email in lowercase letters for e.g anastasiia@gmail.com');
  } else {
    setSuccessMessage(errorContainer, emailForScreen, 'Success! Form Submitted.');
  }
}

// Event Listeners
formMobile.addEventListener('submit', (e) => {
  e.preventDefault();

  // Accessing the value of the name, email & comment's value
  const nameValueMobile = nameMobile.value.trim();
  const emailValueMobile = emailMobile.value.trim();
  const commentValueMobile = commentMobile.value.trim();

  validateEmail(emailMobile, emailValueMobile, errorContainerMobile);

  if (nameValueMobile !== '' && emailValueMobile.match(emailPattern) && commentValueMobile !== '') {
    formMobile.submit();
  }
});

/* formDesktop.addEventListener('submit', (e) => {
  e.preventDefault();

  // Accessing the value of the name, email & comment's value
  const nameValueDesktop = nameDesktop.value.trim();
  const emailValueDesktop = emailDesktop.value.trim();
  const commentValueDesktop = commentDesktop.value.trim();

  validateEmail(emailDesktop, emailValueDesktop, errorContainerDesktop);

  if (nameValueDesktop !== '' && emailValueDesktop.match(emailPattern) && commentValueDesktop !== '') {
    formDesktop.submit();
  }
}); */