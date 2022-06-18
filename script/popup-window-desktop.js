// Variable declarations
const section2Mobile1 = document.querySelector('.section-2-mobile');
const section2Desktop1 = document.createElement('section');
const section2Desktop2 = document.createElement('div');
const section2Desktop3 = document.createElement('div');
const section2Desktop4 = document.createElement('div');

// Array-objects for Sections 2-1, 2-2, 2-3, 2-4 in desktop screen
const projects2Desktop1 = [
  {
    cardNum: 11,
    cardTitles: ['Projects', 'Project name goes here'],
    images2: ['../images/image9.jpg', '../images/image3.jpg'],
    technologies1: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    paragraphs2: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
    button11: 'See this project',
    buttons2: ['See live', 'See source'],
    links: ['Previous project', 'Next project'],
  },
];

const projects2Desktop2 = [
  {
    cardNum: [12, 16],
    cardTitles: 'Project name goes here',
    images2: ['../images/image4.jpg', '../images/image11.png', '../images/image8.jpg'],
    technologies1: ['HTML/CSS', 'Ruby on Rails', 'JavaScript', '+1'],
    paragraphs2: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
      'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
    button11: 'See this project',
    buttons2: ['See live', 'See source'],
    links: ['Previous project', 'Next project'],
  },
];

const projects2Desktop3 = [{
  cardNum: [13, 15],
  cardTitles: 'Project name goes here',
  images2: ['../images/image5.jpg', '../images/image7.jpg', '../images/image12.png'],
  technologies1: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  paragraphs2: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
  button11: 'See this project',
  buttons2: ['See live', 'See source'],
  links: ['Previous project', 'Next project'],
},
];

const projects2Desktop4 = [{
  cardNum: 14,
  cardTitles: 'Project name goes here',
  images2: ['../images/image13.png', '../images/image14.png', '../images/image6.jpg'],
  technologies1: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  paragraphs2: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi',
    'Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'],
  button11: 'See this project',
  buttons2: ['See live', 'See source'],
  links: ['Previous project', 'Next project'],
},
];

// Section 2-1 Desktop
projects2Desktop1.forEach((cardObject) => {
  section2Desktop1.innerHTML = `
    <h2 class="section-2-1-heading-desktop playfair-display-font font-color">${cardObject.cardTitles[0]}</h2>
    <img src="${cardObject.images2[0]}" alt="A smaller image of a square filled with dots" class="section-2-1-img-1">

    <!--Project Card 1-->
    <div class="card-1-desktop card-${cardObject.cardNum}">
      <img src="${cardObject.images2[1]}" alt="Hands on a macbook keyboard" class="card-1-img-desktop"/>

      <!--Project description-->
      <div class="project-description-desktop bg-color">
        <h3 class="poppins-font font-white">${cardObject.cardTitles[1]}</h3>

        <ul class="project-technologies-desktop font-white">
          <li class="font-color mr-3">${cardObject.technologies1[0]}</li>
          <li class="font-color mr-3">${cardObject.technologies1[1]}</li>
          <li class="font-color">${cardObject.technologies1[2]}</li>
        </ul>

        <a href="#" class="see-this-project-btn-desktop poppins-font bg-color font-white" data-modal-target="modal-${cardObject.cardNum}">${cardObject.button11} <span class="material-icons ">arrow_forward</span></a>

        <!--Popup window container-->
        <div class="modal-desktop popup-${cardObject.cardNum}-desktop" id="modal-${cardObject.cardNum}">
          <div class="modal-header">
            <h3 class="poppins-font font-color popup-title">${cardObject.cardTitles[1]}</h3>
            <button type="button" class="close-button close-button-${cardObject.cardNum}" data-close-button>&times;</button>
          </div>

          <div class="modal-body">
            <ul class="project-technologies-popup-desktop font-color">
              <li class="poppins-font font-color mr-3">${cardObject.technologies1[0]}</li>
              <li class="poppins-font font-color mr-3 rubyonrails-text">${cardObject.technologies1[1]}</li>
              <li class="poppins-font font-color">${cardObject.technologies1[2]}</li>
            </ul>

            <div class="popup-img-desktop">
              <img src="${cardObject.images2[1]}" class="popup-img-1-desktop"/>

              <img src="${cardObject.images2[1]}" class="popup-img-2-desktop"/>
              <img src="${cardObject.images2[1]}" class="popup-img-3-desktop"/>
              <img src="${cardObject.images2[1]}" class="popup-img-4-desktop"/>
              <img src="${cardObject.images2[1]}" class="popup-img-5-desktop"/>
            </div>

            <div class="paragraphs">
              <p class="texts poppins-font font-color">${cardObject.paragraphs2[0]}</p>
              <p class="texts poppins-font font-color">${cardObject.paragraphs2[1]}</p>

              <div class="buttons">
                <a href="#" class="button2A font-color">${cardObject.buttons2[0]} <span><img src="images/ic_link.svg" alt="Download icon"/></span></a>
                <a href="#" class="button2B font-color">${cardObject.buttons2[1]} <span><img src="images/ic_github_white.png" alt="Github icon"/></span></a>
              </div>

              <div class="links">
                <a href="#" class="linkA font-color"><span><i class="material-icons back-arrow">arrow_back</i></span>${cardObject.links[0]}</a>
                <a href="#" class="linkB font-color">${cardObject.links[1]}<span><i class="material-icons forward-arrow">arrow_forward</i></span></a>
              </div>
            </div>
          </div>
        </div>

        <div id="overlay"></div>
      </div>
    </div>
  `;
});

section2Desktop1.className = 'section-2-1-desktop';
section2Desktop1.id = 'section-2-1-desktop';
section2Mobile1.after(section2Desktop1); // Append Section 2-1 desktop after Section 2 Mobile

// Section 2-2 Desktop
projects2Desktop2.forEach((cardObject) => {
  section2Desktop2.innerHTML = `
    <!--Project Card 2-->
    <div class="container card-2-desktop card-${cardObject.cardNum[0]}">
      <img src="${cardObject.images2[0]}" alt="A macbook" class="card-2-img-desktop"/>
      <div class="middle">
        <a href="#" class="see-this-project-btn-desktop poppins-font bg-color font-white" data-modal-target="modal-${cardObject.cardNum[0]}">See project <span class="material-icons ">arrow_forward</span></a>        
      </div>

      <!--Popup window container-->
        <div class="modal-desktop popup-${cardObject.cardNum[0]}-desktop" id="modal-${cardObject.cardNum[0]}">
          <div class="modal-header">
            <h3 class="poppins-font font-color popup-title">${cardObject.cardTitles}</h3>
            <button type="button" class="close-button close-button-${cardObject.cardNum[0]}" data-close-button>&times;</button>
          </div>

          <div class="modal-body">
            <ul class="project-technologies-popup-desktop font-color">
              <li class="poppins-font font-color mr-3">${cardObject.technologies1[0]}</li>
              <li class="poppins-font font-color mr-3 rubyonrails-text">${cardObject.technologies1[1]}</li>
              <li class="poppins-font font-color">${cardObject.technologies1[2]}</li>
            </ul>

            <div class="popup-img-desktop">
              <img src="${cardObject.images2[0]}" class="popup-img-1-desktop"/>

              <img src="${cardObject.images2[0]}" class="popup-img-2-desktop"/>
              <img src="${cardObject.images2[0]}" class="popup-img-3-desktop"/>
              <img src="${cardObject.images2[0]}" class="popup-img-4-desktop"/>
              <img src="${cardObject.images2[0]}" class="popup-img-5-desktop"/>
            </div>

            <div class="paragraphs">
              <p class="texts poppins-font font-color">${cardObject.paragraphs2[0]}</p>
              <p class="texts poppins-font font-color">${cardObject.paragraphs2[1]}</p>

              <div class="buttons">
                <a href="#" class="button2A font-color">${cardObject.buttons2[0]} <span><img src="images/ic_link.svg" alt="Download icon"/></span></a>
                <a href="#" class="button2B font-color">${cardObject.buttons2[1]} <span><img src="images/ic_github_white.png" alt="Github icon"/></span></a>
              </div>

              <div class="links">
                <a href="#" class="linkA font-color"><span><i class="material-icons back-arrow">arrow_back</i></span>${cardObject.links[0]}</a>
                <a href="#" class="linkB font-color">${cardObject.links[1]}<span><i class="material-icons forward-arrow">arrow_forward</i></span></a>
              </div>
            </div>
          </div>
        </div>

        <div id="overlay"></div>
      </div>
    </div>
    
    <img src="${cardObject.images2[1]}" alt="A geometric image with a semi-circle" class="section-2-2-img-1"/>
    
    <!--Project Card 6-->
    <div class="card-${cardObject.cardNum[1]}-desktop">
      <img src="${cardObject.images2[2]}" alt="A laptop with a light purple screen" class="card-6-img-desktop"/>

      <!--Project description-->
      <div class="project-description-card-6-desktop bg-color">
        <h4 class="poppins-font font-white">${cardObject.cardTitles}</h4>

        <ul class="project-technologies-desktop font-white">
          <li class="font-color mr-3">${cardObject.technologies1[0]}</li>
          <li class="font-color mr-3">${cardObject.technologies1[1]}</li>
          <li class="font-color">${cardObject.technologies1[3]}</li>
        </ul>

        <a href="#" class="see-this-project-btn-desktop poppins-font bg-color font-white" data-modal-target="modal-${cardObject.cardNum[1]}">See this project <span class="material-icons ">arrow_forward</span></a>

        <!--Popup window container-->
        <div class="modal-desktop popup-${cardObject.cardNum[1]}-desktop" id="modal-${cardObject.cardNum[1]}">
          <div class="modal-header">
            <h3 class="poppins-font font-color popup-title">${cardObject.cardTitles}</h3>
            <button type="button" class="close-button close-button-${cardObject.cardNum[1]}" data-close-button>&times;</button>
          </div>

          <div class="modal-body">
            <ul class="project-technologies-popup-desktop font-color">
              <li class="poppins-font font-color mr-3">${cardObject.technologies1[0]}</li>
              <li class="poppins-font font-color mr-3 rubyonrails-text">${cardObject.technologies1[1]}</li>
              <li class="poppins-font font-color">${cardObject.technologies1[2]}</li>
            </ul>

            <div class="popup-img-desktop">
              <img src="${cardObject.images2[2]}" class="popup-img-1-desktop"/>

              <img src="${cardObject.images2[2]}" class="popup-img-2-desktop"/>
              <img src="${cardObject.images2[2]}" class="popup-img-3-desktop"/>
              <img src="${cardObject.images2[2]}" class="popup-img-4-desktop"/>
              <img src="${cardObject.images2[2]}" class="popup-img-5-desktop"/>
            </div>

            <div class="paragraphs">
              <p class="texts poppins-font font-color">${cardObject.paragraphs2[0]}</p>
              <p class="texts poppins-font font-color">${cardObject.paragraphs2[1]}</p>

              <div class="buttons">
                <a href="#" class="button2A font-color">${cardObject.buttons2[0]} <span><img src="images/ic_link.svg" alt="Download icon"/></span></a>
                <a href="#" class="button2B font-color">${cardObject.buttons2[1]} <span><img src="images/ic_github_white.png" alt="Github icon"/></span></a>
              </div>

              <div class="links">
                <a href="#" class="linkA font-color"><span><i class="material-icons back-arrow">arrow_back</i></span>${cardObject.links[0]}</a>
                <a href="#" class="linkB font-color">${cardObject.links[1]}<span><i class="material-icons forward-arrow">arrow_forward</i></span></a>
              </div>
            </div>
          </div>
        </div>

        <div id="overlay"></div>
      </div>
    </div>
    `;
});

section2Desktop2.className = 'section-2-2-desktop';
section2Desktop1.after(section2Desktop2); // Append Section 2-2 desktop after Section 2-1 Desktop

// Section 2-3 Desktop
projects2Desktop3.forEach((cardObject) => {
  section2Desktop3.innerHTML = `
    <!--Project Card 3-->
    <div class="container card-3-desktop card-${cardObject.cardNum[0]}">
      <img src="${cardObject.images2[0]}" alt="A laptop & a mobile phone" class="card-3-img-desktop"/>
      <div class="middle">
        <a href="#" class="see-this-project-btn-desktop poppins-font bg-color font-white" data-modal-target="modal-${cardObject.cardNum[0]}">See project <span class="material-icons ">arrow_forward</span></a>
      </div>

      <!--Popup window container-->
      <div class="modal-desktop popup-${cardObject.cardNum[0]}-desktop" id="modal-${cardObject.cardNum[0]}">
          <div class="modal-header">
            <h3 class="poppins-font font-color popup-title">${cardObject.cardTitles}</h3>
            <button type="button" class="close-button close-button-${cardObject.cardNum[0]}" data-close-button>&times;</button>
          </div>

          <div class="modal-body">
            <ul class="project-technologies-popup-desktop font-color">
              <li class="poppins-font font-color mr-3">${cardObject.technologies1[0]}</li>
              <li class="poppins-font font-color mr-3 rubyonrails-text">${cardObject.technologies1[1]}</li>
              <li class="poppins-font font-color">${cardObject.technologies1[2]}</li>
            </ul>

            <div class="popup-img-desktop">
              <img src="${cardObject.images2[0]}" class="popup-img-1-desktop"/>

              <img src="${cardObject.images2[0]}" class="popup-img-2-desktop"/>
              <img src="${cardObject.images2[0]}" class="popup-img-3-desktop"/>
              <img src="${cardObject.images2[0]}" class="popup-img-4-desktop"/>
              <img src="${cardObject.images2[0]}" class="popup-img-5-desktop"/>
            </div>

            <div class="paragraphs">
              <p class="texts poppins-font font-color">${cardObject.paragraphs2[0]}</p>
              <p class="texts poppins-font font-color">${cardObject.paragraphs2[1]}</p>

              <div class="buttons">
                <a href="#" class="button2A font-color">${cardObject.buttons2[0]} <span><img src="images/ic_link.svg" alt="Download icon"/></span></a>
                <a href="#" class="button2B font-color">${cardObject.buttons2[1]} <span><img src="images/ic_github_white.png" alt="Github icon"/></span></a>
              </div>

              <div class="links">
                <a href="#" class="linkA font-color"><span><i class="material-icons back-arrow">arrow_back</i></span>${cardObject.links[0]}</a>
                <a href="#" class="linkB font-color">${cardObject.links[1]}<span><i class="material-icons forward-arrow">arrow_forward</i></span></a>
              </div>
            </div>
          </div>
        </div>

        <div id="overlay"></div>
      </div>
    </div>

    <div class="section-2-3-1-desktop">
      <!--Project Card 5-->
      <div class="container card-5-desktop card-${cardObject.cardNum[1]}">
        <img src="${cardObject.images2[1]}" alt="A tilted laptop" class="card-5-img-desktop"/>
        <div class="middle">
          <a href="#" class="see-this-project-btn-desktop poppins-font bg-color font-white" data-modal-target="modal-${cardObject.cardNum[1]}">See project <span class="material-icons ">arrow_forward</span></a>
        </div>

        <!--Popup window container-->
        <div class="modal-desktop popup-${cardObject.cardNum[1]}-desktop" id="modal-${cardObject.cardNum[1]}">
            <div class="modal-header">
              <h3 class="poppins-font font-color popup-title">${cardObject.cardTitles}</h3>
              <button type="button" class="close-button close-button-${cardObject.cardNum[1]}" data-close-button>&times;</button>
            </div>

            <div class="modal-body">
              <ul class="project-technologies-popup-desktop font-color">
                <li class="poppins-font font-color mr-3">${cardObject.technologies1[0]}</li>
                <li class="poppins-font font-color mr-3 rubyonrails-text">${cardObject.technologies1[1]}</li>
                <li class="poppins-font font-color">${cardObject.technologies1[2]}</li>
              </ul>

              <div class="popup-img-desktop">
                <img src="${cardObject.images2[1]}" class="popup-img-1-desktop"/>

                <img src="${cardObject.images2[1]}" class="popup-img-2-desktop"/>
                <img src="${cardObject.images2[1]}" class="popup-img-3-desktop"/>
                <img src="${cardObject.images2[1]}" class="popup-img-4-desktop"/>
                <img src="${cardObject.images2[1]}" class="popup-img-5-desktop"/>
              </div>

              <div class="paragraphs">
                <p class="texts poppins-font font-color">${cardObject.paragraphs2[0]}</p>
                <p class="texts poppins-font font-color">${cardObject.paragraphs2[1]}</p>

                <div class="buttons">
                  <a href="#" class="button2A font-color">${cardObject.buttons2[0]} <span><img src="images/ic_link.svg" alt="Download icon"/></span></a>
                  <a href="#" class="button2B font-color">${cardObject.buttons2[1]} <span><img src="images/ic_github_white.png" alt="Github icon"/></span></a>
                </div>

                <div class="links">
                  <a href="#" class="linkA font-color"><span><i class="material-icons back-arrow">arrow_back</i></span>${cardObject.links[0]}</a>
                  <a href="#" class="linkB font-color">${cardObject.links[1]}<span><i class="material-icons forward-arrow">arrow_forward</i></span></a>
                </div>
              </div>
            </div>
          </div>

          <div id="overlay"></div>
      </div>

      <img src="${cardObject.images2[2]}" alt="An image of a colorful and rectangular geometric pattern" class="section-2-3-img-1"/>
    </div>
  `;
});

section2Desktop3.className = 'section-2-3-desktop';
section2Desktop2.after(section2Desktop3); // Append Section 2-3 desktop after Section 2-2 Desktop

// Section 2-4 Desktop
projects2Desktop4.forEach((cardObject) => {
  section2Desktop4.innerHTML = `
    <img src="${cardObject.images2[0]}" alt="Geometric image on top left corner" class="section-2-4-img-1"/>
    <img src="${cardObject.images2[1]}" alt="Geometric image on top right corner" class="section-2-4-img-2"/>
    
    <!--Project Card 4-->
    <div class="container card-4-desktop card-${cardObject.cardNum}">
      <img src="${cardObject.images2[2]}" alt="Laptop & mobile phone devices" class="card-4-img-desktop"/>
      <div class="middle">
        <a href="#" class="see-this-project-btn-desktop poppins-font bg-color font-white" data-modal-target="modal-${cardObject.cardNum}">See project <span class="material-icons ">arrow_forward</span></a>      
      </div>

      <!--Popup window container-->
        <div class="modal-desktop popup-${cardObject.cardNum}-desktop" id="modal-${cardObject.cardNum}">
          <div class="modal-header">
            <h3 class="poppins-font font-color popup-title">${cardObject.cardTitles}</h3>
            <button type="button" class="close-button close-button-${cardObject.cardNum}" data-close-button>&times;</button>
          </div>

          <div class="modal-body">
            <ul class="project-technologies-popup-desktop font-color">
              <li class="poppins-font font-color mr-3">${cardObject.technologies1[0]}</li>
              <li class="poppins-font font-color mr-3 rubyonrails-text">${cardObject.technologies1[1]}</li>
              <li class="poppins-font font-color">${cardObject.technologies1[2]}</li>
            </ul>

            <div class="popup-img-desktop">
              <img src="${cardObject.images2[2]}" class="popup-img-1-desktop"/>

              <img src="${cardObject.images2[2]}" class="popup-img-2-desktop"/>
              <img src="${cardObject.images2[2]}" class="popup-img-3-desktop"/>
              <img src="${cardObject.images2[2]}" class="popup-img-4-desktop"/>
              <img src="${cardObject.images2[2]}" class="popup-img-5-desktop"/>
            </div>

            <div class="paragraphs">
              <p class="texts poppins-font font-color">${cardObject.paragraphs2[0]}</p>
              <p class="texts poppins-font font-color">${cardObject.paragraphs2[1]}</p>

              <div class="buttons">
                <a href="#" class="button2A font-color">${cardObject.buttons2[0]} <span><img src="images/ic_link.svg" alt="Download icon"/></span></a>
                <a href="#" class="button2B font-color">${cardObject.buttons2[1]} <span><img src="images/ic_github_white.png" alt="Github icon"/></span></a>
              </div>

              <div class="links">
                <a href="#" class="linkA font-color"><span><i class="material-icons back-arrow">arrow_back</i></span>${cardObject.links[0]}</a>
                <a href="#" class="linkB font-color">${cardObject.links[1]}<span><i class="material-icons forward-arrow">arrow_forward</i></span></a>
              </div>
            </div>
          </div>
        </div>

        <div id="overlay"></div>  
    </div>
  `;
});

section2Desktop4.className = 'section-2-4-desktop';
section2Desktop3.after(section2Desktop4); // Append Section 2-4 desktop after Section 2-3 Desktop

// Stores all of the id values of the modal/popup container
// that are also stored & matched up with the data-modal-target attribute
const dataModalTarget1 = ['modal-11', 'modal-12', 'modal-13', 'modal-14', 'modal-15', 'modal-16'];
let j = 10;
let overlay1;

function openModal1(modal) {
  if (modal === null) { return; }
  modal.classList.add('active');
  overlay1.classList.add('active');
}

function closeModal1(modal) {
  if (modal === null) { return; }
  modal.classList.remove('active');
  overlay1.classList.remove('active');
}

dataModalTarget1.forEach((id) => {
  // the open a Modal button
  const seeThisProjectBtnDesktop = document.querySelector(`[data-modal-target='${id}']`);

  j += 1; // for the close-button-number class
  const closeModalButtons1 = document.querySelector(`.close-button-${j}`); // the close a Modal button

  overlay1 = document.getElementById('overlay');

  // To open modal button
  seeThisProjectBtnDesktop.addEventListener('click', () => {
    const modal1 = document.getElementById(`${id}`);
    openModal1(modal1);
  });

  // To close a modal by clicking on the close button
  closeModalButtons1.addEventListener('click', () => {
    const modal1 = closeModalButtons1.closest('.modal-desktop');
    closeModal1(modal1);
  });
});
