import { SELECTOR } from './constants';
import mobileMenu from './module/mobile-menu';
import formValidation from './module/form-validation';
import search from './module/search';
import createModal from './module/create-modal';

window.onload = () => {
  /* Mobile Navigation */
  if (document.getElementById(SELECTOR.mobileMenu)) {
    mobileMenu();
  }
  
  /* Form validation */
  if (document.getElementById(SELECTOR.contactForm)) {
    formValidation();
  }

  /* Search Form */
  if (document.getElementById(SELECTOR.searchForm)) {
    search();
  }

  /* test modal */
  const modalContent = {
    headerContent: 'Test heading',
    bodyContent: 'Hello, Modal Window!'
  };
  createModal(modalContent);
};