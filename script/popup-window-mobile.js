// Variable declarations
/* const section1Desktop = document.querySelector('.section-1-desktop'); */
const section2Mobile = document.createElement('section');
const projectsContainerMobile = document.createElement('div');

// Store my project card information
const projectsMobile = [
  {
    num: 1,
    cardTitle: 'Project name goes here',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    image1: '../images/image3.jpg',
    paragraphs: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
    button1: 'See this project',
    buttons: ['See live', 'See source'],
  },
  {
    num: 2,
    cardTitle: 'Project name goes here',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    image1: '../images/image4.jpg',
    paragraphs: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
    button1: 'See this project',
    buttons: ['See live', 'See source'],
  },
  {
    num: 3,
    cardTitle: 'Project name goes here',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    image1: '../images/image5.jpg',
    paragraphs: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
    button1: 'See this project',
    buttons: ['See live', 'See source'],
  },
  {
    num: 4,
    cardTitle: 'Project name goes here',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    image1: '../images/image6.jpg',
    paragraphs: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
    button1: 'See this project',
    buttons: ['See live', 'See source'],
  },
  {
    num: 5,
    cardTitle: 'Project name goes here',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    image1: '../images/image7.jpg',
    paragraphs: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
    button1: 'See this project',
    buttons: ['See live', 'See source'],
  },
  {
    num: 6,
    cardTitle: 'Project name goes here',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    image1: '../images/image8.jpg',
    paragraphs: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
    button1: 'See this project',
    buttons: ['See live', 'See source'],
  },
];

// Create Section 2 Mobile | Projects Section
section2Mobile.innerHTML = `
  <h2 class="section-2-heading-mobile playfair-display-font font-color">Projects</h2> 
`;

section2Mobile.className = 'section-2-mobile';
section2Mobile.setAttribute('id', 'section-2-mobile');

// Create the cards & the popup container, then append them to projects-container-mobile
projectsMobile.forEach((cardObj) => {
  const cardMobile = document.createElement('div'); // Create the card (& in a sense, a new row too)
  cardMobile.className = `card-${cardObj.num}-mobile`;

  cardMobile.innerHTML = `
    <img src="${cardObj.image1}" alt="Hands on a macbook keyboard" class="card-${cardObj.num}-img-mobile"/>

    <!--Project description-->
    <div class="project-description bg-color">
      <h3 class="poppins-font font-white font-weight-lighter">${cardObj.cardTitle}</h3>

      <ul class="project-technologies font-white">
        <li class="font-color mr-3">${cardObj.technologies[0]}</li>
        <li class="font-color mr-3">${cardObj.technologies[1]}</li>
        <li class="font-color">${cardObj.technologies[2]}</li>
      </ul>

      <a href="#" class="see-this-project-btn-mobile poppins-font bg-color font-white" data-modal-target="modal-${cardObj.num}">${cardObj.button1} <span class="material-icons ">arrow_forward</span></a>

      <!--Popup window container-->
      <div class="modal popup-${cardObj.num}-mobile" id="modal-${cardObj.num}">
        <div class="modal-header">
          <button type="button" class="close-button close-button-${cardObj.num}" data-close-button>&times;</button>
        </div>

        <div class="modal-body">
          <h3 class="poppins-font font-color popup-title">${cardObj.cardTitle}</h3>
          <ul class="project-technologies-popup-mobile font-color">
            <li class="poppins-font font-color mr-3">${cardObj.technologies[0]}</li>
            <li class="poppins-font font-color mr-3 rubyonrails-text">${cardObj.technologies[1]}</li>
            <li class="poppins-font font-color">${cardObj.technologies[2]}</li>
          </ul>

          <div class="popup-img-mobile">
            <img src="${cardObj.image1}" class="popup-img-1-mobile"/>

            <img src="${cardObj.image1}" class="popup-img-2-mobile"/>
            <img src="${cardObj.image1}" class="popup-img-3-mobile"/>
            <img src="${cardObj.image1}" class="popup-img-4-mobile"/>
            <img src="${cardObj.image1}" class="popup-img-5-mobile"/>
          </div>

          <div class="paragraphs">
            <p class="texts poppins-font font-color">${cardObj.paragraphs[0]}</p>
            <p class="texts poppins-font font-color">${cardObj.paragraphs[1]}</p>
          </div>

          <div class="buttons">
            <a href="#" class="button2A font-color">${cardObj.buttons[0]} <span><img src="images/ic_link.svg" alt="Download icon"/></span></a>
            <a href="#" class="button2B font-color">${cardObj.buttons[1]} <span><img src="images/ic_github_white.png" alt="Github icon"/></span></a>
          </div>
        </div>
      </div>

      <div id="overlay"></div>
    </div>
  `;

  projectsContainerMobile.append(cardMobile);
});

projectsContainerMobile.className = 'projects-container-mobile';

// Append projects-container-mobile to Section 2 Mobile
section2Mobile.append(projectsContainerMobile);
section1Desktop.after(section2Mobile); // Append Section 2 Mobile after Section 1 Desktop

// Stores all of the id values of the modal/popup container
// that are also stored & matched up with the data-modal-target attribute
const dataModalTarget = ['modal-1', 'modal-2', 'modal-3', 'modal-4', 'modal-5', 'modal-6'];
let i = 0;
let overlay;

function openModal(modal) {
  if (modal === null) { return; }
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal === null) { return; }
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

dataModalTarget.forEach((id) => {
  // the open a Modal button
  const seeThisProjectBtnMobile = document.querySelector(`[data-modal-target='${id}']`);

  i += 1; // for the close-button-number class
  const closeModalButtons = document.querySelector(`.close-button-${i}`); // the close a Modal button

  overlay = document.getElementById('overlay');

  // To open modal button
  seeThisProjectBtnMobile.addEventListener('click', () => {
    const modal = document.getElementById(`${id}`);
    openModal(modal);
  });

  // To close a modal by clicking on the close button
  closeModalButtons.addEventListener('click', () => {
    const modal = closeModalButtons.closest('.modal');
    closeModal(modal);
  });
});
