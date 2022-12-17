import { SELECTOR } from './constants';
import modalsJson from './modals.json';
import mobileMenu from './module/mobile-menu';
import formValidation from './module/form-validation';
import search from './module/search';
import createModal from './module/create-modal';
import handleModalVisibility from './helpers/handle-modal-visibility';
import smoothScrollToElement from './module/smooth-scroll-to-element';

window.onload = () => {
  if (document.getElementById(SELECTOR.mobileMenu)) {
    mobileMenu();
  }

  if (document.getElementById(SELECTOR.contactForm)) {
    formValidation();
  }

  if (document.getElementById(SELECTOR.searchForm)) {
    search();
  }

  /* Modals */
  /* Add Event.click for every modal trigger */
  const modals = document.querySelectorAll(`[${SELECTOR.modalWindowTrigger}]`);
  if (modals) modals.forEach(modal => modal.addEventListener('click', handleModalVisibility));
  const modalsData = typeof modalsJson !== 'object' ? JSON.parse(modalsJson) : modalsJson;

  /* Modal for Terms and Privacy */
  const modalTermsAndPrivacyContent = {...modalsData.modalTermsAndPrivacy};
  const modalTermsAndPrivacyAttrs = {
    id: SELECTOR.modalTermsAndPrivacyId,
  };
  createModal(modalTermsAndPrivacyContent, {attributes: modalTermsAndPrivacyAttrs, modalSize: 'lg'});

  /* Scroll by anchor; smooth-trogger [data-scroll-anchor] */
  smoothScrollToElement();
};
