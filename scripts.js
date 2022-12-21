const menuBtn = document.querySelector('#menu');
const mobileMenu = document.querySelector('#mobile_menu');
const closeIcon = document.querySelector('#close_icon');
const listItems = document.querySelectorAll('.list_item');

menuBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

for (let i = 0; i < listItems.length; i += 1) {
  const element = listItems[i];
  element.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });
}

/* -- HTML Dinamyc Creation */

const WorksArray = [
  {
    thumbnail: 'url(./imgs/works_desktop_1.png)',
    projectTitle: 'Tonic',
    tags: '<b>CANOPY</b> <span id="tags_info">• Back End Dev • 2015</span>',
    info: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    categories: '<li>HTML</li><li>CSS</li><li>JavaScript</li>',
    buttonLive: 'See Project',
    buttonSource: 'See Source',
  },

  {
    thumbnail: 'url(./imgs/works_desktop_2.png)',
    projectTitle: 'Multi-Post Stories',
    tags: '<b>CANOPY</b> <span id="tags_info">• Back End Dev • 2015</span>',
    info: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    categories: '<li>HTML</li><li>CSS</li><li>JavaScript</li>',
    buttonLive: 'See Project',
    buttonSource: 'See Source',
  },

  {
    thumbnail: 'url(./imgs/works_desktop_3.png)',
    projectTitle: 'Uber Navigation',
    tags: '<b>FACEBOOK</b> <span id="tags_info">• Back End Dev • 2015</span>',
    info: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    categories: '<li>HTML</li><li>CSS</li><li>JavaScript</li>',
    buttonLive: 'See Project',
    buttonSource: 'See Source',
  },

  {
    thumbnail: 'url(./imgs/works_desktop_4.png)',
    projectTitle: 'Uber Navigation',
    tags: '<b>UBER</b> <span id="tags_info">• Back End Dev • 2015</span>',
    info: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    categories: '<li>HTML</li><li>CSS</li><li>JavaScript</li>',
    buttonLive: 'See Project',
    buttonSource: 'See Source',
  },
];

const btnCollection = document.getElementsByClassName('see_more');

/* -- Card 1 Content -- */

document.getElementById('work_1').style.content = WorksArray[0].thumbnail;
document.getElementById('title_project_1').innerHTML = WorksArray[0].projectTitle;
document.getElementById('card_tags_1').innerHTML = WorksArray[0].tags;
document.getElementById('card_info_1').innerHTML = WorksArray[0].info;
document.getElementById('card_categories_1').innerHTML = WorksArray[0].categories;
btnCollection[0].innerHTML = WorksArray[0].buttonLive;

/* -- Card 2 Content -- */

document.getElementById('card_2').children[0].style.content = WorksArray[1].thumbnail;
document.getElementById('title_project_2').innerHTML = WorksArray[1].projectTitle;
document.getElementById('card_tags_2').innerHTML = WorksArray[1].tags;
document.getElementById('card_info_2').innerHTML = WorksArray[1].info;
document.getElementById('card_categories_2').innerHTML = WorksArray[1].categories;
btnCollection[1].innerHTML = WorksArray[1].buttonLive;

/* -- Card 3 Content -- */

document.getElementById('card_3').children[0].style.content = WorksArray[2].thumbnail;
document.getElementById('title_project_3').innerHTML = WorksArray[2].projectTitle;
document.getElementById('card_tags_3').innerHTML = WorksArray[2].tags;
document.getElementById('card_info_3').innerHTML = WorksArray[2].info;
document.getElementById('card_categories_3').innerHTML = WorksArray[2].categories;
btnCollection[2].innerHTML = WorksArray[2].buttonLive;

/* -- Card 4 Content -- */

document.getElementById('card_4').children[0].style.content = WorksArray[3].thumbnail;
document.getElementById('title_project_4').innerHTML = WorksArray[3].projectTitle;
document.getElementById('card_tags_4').innerHTML = WorksArray[3].tags;
document.getElementById('card_info_4').innerHTML = WorksArray[3].info;
document.getElementById('card_categories_4').innerHTML = WorksArray[3].categories;
btnCollection[3].innerHTML = WorksArray[3].buttonLive;

/* Popup Window */

btnCollection[0].addEventListener('click', () => {
  const body = document.querySelector('body');
  const main = document.createElement('div');
  main.id = 'main_popup';
  const popup = document.createElement('article');
  popup.id = 'popup';
  popup.innerHTML = `
  <div class="card_block" id="card_block_1">
  <button id="close_x_popup"><img src="./imgs/close_x_popup.png"></button>
      <h2 class="project_title" id="title_project_1">${WorksArray[0].projectTitle}</h2>
      <p class="card_tags" id="card_tags_1">${WorksArray[0].tags}</p>
      <img class="thumbnails" id="work_1"/>
      <div class="work_description">
      <p class="card_info" id="card_info_1">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essent.
      </p>
      <div class="categories_box">
        <ul class="card_categories" id="card_categories_1">
        ${WorksArray[0].categories}
        </ul>
        <div class="button_box">
          <button class="see_more popup_button">See Live<img src="./" id="popup_live"></button>
          <button class="see_more popup_button">See Source<img id="popup_source"></button>
        </div>
      </div>
      </div>
  </div>
  `;

  main.appendChild(popup);
  body.appendChild(main);

  const closePopup = document.querySelector('#close_x_popup');
  closePopup.addEventListener('click', () => {
    body.removeChild(main);
  });
});

btnCollection[1].addEventListener('click', () => {
  const body = document.querySelector('body');
  const main = document.createElement('div');
  main.id = 'main_popup';
  const popup = document.createElement('article');
  popup.id = 'popup';
  popup.innerHTML = `
  <div class="card_block" id="card_block_1">
  <button id="close_x_popup"><img src="./imgs/close_x_popup.png"></button>
      <h2 class="project_title" id="title_project_1">${WorksArray[1].projectTitle}</h2>
      <p class="card_tags" id="card_tags_1">${WorksArray[1].tags}</p>
      <img class="thumbnails" id="work_2"/>
      <div class="work_description">
      <p class="card_info" id="card_info_1">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essent.
      </p>
      <div class="categories_box">
        <ul class="card_categories" id="card_categories_1">
        ${WorksArray[1].categories}
        </ul>
        <div class="button_box">
          <button class="see_more popup_button">See Live<img src="./" id="popup_live"></button>
          <button class="see_more popup_button">See Source<img id="popup_source"></button>
        </div>
      </div>
      </div>
  </div>
  `;

  main.appendChild(popup);
  body.appendChild(main);

  const closePopup = document.querySelector('#close_x_popup');
  closePopup.addEventListener('click', () => {
    body.removeChild(main);
  });
});

btnCollection[2].addEventListener('click', () => {
  const body = document.querySelector('body');
  const main = document.createElement('div');
  main.id = 'main_popup';
  const popup = document.createElement('article');
  popup.id = 'popup';
  popup.innerHTML = `
  <div class="card_block" id="card_block_1">
  <button id="close_x_popup"><img src="./imgs/close_x_popup.png"></button>
      <h2 class="project_title" id="title_project_1">${WorksArray[2].projectTitle}</h2>
      <p class="card_tags" id="card_tags_1">${WorksArray[2].tags}</p>
      <img class="thumbnails" id="work_3"/>
      <div class="work_description">
      <p class="card_info" id="card_info_1">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essent.
      </p>
      <div class="categories_box">
        <ul class="card_categories" id="card_categories_1">
        ${WorksArray[2].categories}
        </ul>
        <div class="button_box">
          <button class="see_more popup_button">See Live<img src="./" id="popup_live"></button>
          <button class="see_more popup_button">See Source<img id="popup_source"></button>
        </div>
      </div>
      </div>
  </div>
  `;

  main.appendChild(popup);
  body.appendChild(main);

  const closePopup = document.querySelector('#close_x_popup');
  closePopup.addEventListener('click', () => {
    body.removeChild(main);
  });
});

btnCollection[3].addEventListener('click', () => {
  const body = document.querySelector('body');
  const main = document.createElement('div');
  main.id = 'main_popup';
  const popup = document.createElement('article');
  popup.id = 'popup';
  popup.innerHTML = `
  <div class="card_block" id="card_block_1">
  <button id="close_x_popup"><img src="./imgs/close_x_popup.png"></button>
      <h2 class="project_title" id="title_project_1">${WorksArray[3].projectTitle}</h2>
      <p class="card_tags" id="card_tags_1">${WorksArray[3].tags}</p>
      <img class="thumbnails" id="work_4"/>
      <div class="work_description">
      <p class="card_info" id="card_info_1">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type
      specimen book. It has survived not only five centuries, but also the leap into
      electronic typesetting, remaining essent.
      </p>
      <div class="categories_box">
        <ul class="card_categories" id="card_categories_1">
        ${WorksArray[3].categories}
        </ul>
        <div class="button_box">
          <button class="see_more popup_button">See Live<img src="./" id="popup_live"></button>
          <button class="see_more popup_button">See Source<img id="popup_source"></button>
        </div>
      </div>
      </div>
  </div>
  `;

  main.appendChild(popup);
  body.appendChild(main);

  const closePopup = document.querySelector('#close_x_popup');
  closePopup.addEventListener('click', () => {
    body.removeChild(main);
  });
});

/* -- Form Validation -- */

function validateEmail(event) {
  const emailField = document.getElementById('form_email').value;
  const re = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  if (!re.test(emailField)) {
    document.getElementById('form_email_error_msg').innerText = 'Error';

    event.preventDefault();
    return false;
  }
  return true;
}

const form = document.querySelector('#form');
form.addEventListener('submit', validateEmail);