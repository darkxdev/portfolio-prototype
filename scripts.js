let menuBtn = document.querySelector('#menu')
let mobileMenu = document.querySelector('#mobile_menu')
let closeIcon = document.querySelector('#close_icon')

menuBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'block'
})

closeIcon.addEventListener('click', () => {
  mobileMenu.style.display = 'none'
})
