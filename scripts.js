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