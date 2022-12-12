"use strict";

const navbarElement = document.querySelector('.navbar');
const mobileMenuButton = document.getElementById('hamburger-menu');

mobileMenuButton.addEventListener('click', handleMobileMenu);

function handleMobileMenu(event) {
  event.preventDefault();
  navbarElement.classList.toggle('is-active');
}
