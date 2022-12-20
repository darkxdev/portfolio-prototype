let menuBtn = document.querySelector('#menu')
let mobileMenu = document.querySelector('#mobile_menu')
let closeIcon = document.querySelector('#close_icon')
let listItems = document.querySelectorAll('.list_item');

menuBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'block'
})

closeIcon.addEventListener('click', () => {
  mobileMenu.style.display = 'none'
})

for (let i = 0; i < listItems.length; i++) {
  let element = listItems[i];
  element.addEventListener('click', ()=>{
      mobileMenu.style.display='none'   
  })
}