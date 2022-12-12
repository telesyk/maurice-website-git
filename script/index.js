"use strict";

/* Mobile Navigation Trigger */
const navbarElement = document.querySelector('.navbar');
const mobileMenuButton = document.getElementById('hamburger-menu');

mobileMenuButton.addEventListener('click', handleMobileMenu);

function handleMobileMenu(event) {
  event.preventDefault();
  navbarElement.classList.toggle('is-active');
}

/* Form validation */
const GROUP_CLASS = 'form-group';
const DANGER_CLASS = 'has-danger';
const SUCCESS_CLASS = 'has-success';
const contactForm = document.getElementById('contactForm');
const formControls = contactForm.querySelectorAll('[required]');
const formSubmitButton = document.getElementById('formSubmit');

function isFieldEmpty(field) {
  const value = field.value.trim();
  return value.length <= 0;
}

function handleSubmitForm(e) {
  formControls.forEach(field => {
    const isEmpty = isFieldEmpty(field);
    if (isEmpty) {
      field.closest(`.${GROUP_CLASS}`).classList.add(DANGER_CLASS);
      field.closest(`.${GROUP_CLASS}`).classList.remove(SUCCESS_CLASS);
    } else {
      field.closest(`.${GROUP_CLASS}`).classList.remove(DANGER_CLASS);
      field.closest(`.${GROUP_CLASS}`).classList.add(SUCCESS_CLASS);
    }
  })
}

if (formSubmitButton) {
  formSubmitButton.addEventListener('click', handleSubmitForm);
}
