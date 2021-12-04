//Open Mobile Menu
const openMenu = document.querySelector('.hamburger-icon')
const menu = document.querySelector('.menu')

openMenu.addEventListener('click', mobileMenu)

function mobileMenu() {
  menu.classList.toggle('active')
}
