import { SELECTOR } from './constants';
import mobileMenu from './module/mobile-menu';
import formValidation from './module/form-validation';
import search from './module/search';
import createModal from './module/create-modal';
import handleModalVisibility from './helpers/handle-modal-visibility';
import modalsData from './modals.json';

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

  const modals = document.querySelectorAll(`[${SELECTOR.modalWindowTrigger}]`);
  if (modals) modals.forEach(modal => modal.addEventListener('click', handleModalVisibility));

  /* test modal */
  const modalContent = {
    headerContent: modalsData.modalTermsAndPrivacy.title,
    bodyContent: modalsData.modalTermsAndPrivacy.description,
  };
  const attrs = [{
    id: SELECTOR.modalTermsAndPrivacyId,
  }];
  const modalTermsAndPrivacy = createModal(modalContent, {attributes: attrs});
};
