import { SELECTOR } from './constants';
import modalsData from './modals.json';
import mobileMenu from './module/mobile-menu';
import formValidation from './module/form-validation';
import search from './module/search';
import createModal from './module/create-modal';
import handleModalVisibility from './helpers/handle-modal-visibility';

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

  /* Modals */
  /* Add Event.click for every modal trigger */
  const modals = document.querySelectorAll(`[${SELECTOR.modalWindowTrigger}]`);
  if (modals) modals.forEach(modal => modal.addEventListener('click', handleModalVisibility));

  /* Single modal creating */
  const modalTermsAndPrivacyContent = {
    headerContent: modalsData.modalTermsAndPrivacy.title,
    bodyContent: modalsData.modalTermsAndPrivacy.description,
  };
  const modalTermsAndPrivacyAttrs = [{
    id: SELECTOR.modalTermsAndPrivacyId,
  }];
  createModal(modalTermsAndPrivacyContent, {attributes: modalTermsAndPrivacyAttrs});
};
