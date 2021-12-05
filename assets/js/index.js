<<<<<<< HEAD
=======

>>>>>>> ed2b2e57592acb845ac828a22faef87660f7c239
//Open Mobile Menu
const openMenu = document.querySelector('.hamburger-icon');
const menu = document.querySelector('.menu');

openMenu.addEventListener('click', mobileMenu);

function mobileMenu() {
  menu.classList.toggle('active');
<<<<<<< HEAD
=======
}
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName('myslides');
  var dots = document.getElementsByClassName('dot');
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
  setTimeout(showSlides, 5000); // Change image every 2 seconds
>>>>>>> ed2b2e57592acb845ac828a22faef87660f7c239
}
