import { SELECTOR } from './constants';
import modalsJson from './modals.json';
import mobileMenu from './module/mobile-menu';
import formValidation from './module/form-validation';
import search from './module/search';
import createModal from './module/create-modal';
import handleModalVisibility from './helpers/handle-modal-visibility';

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

  /* Scroll by anchor */
  const anchorElements = document.querySelectorAll(`[${SELECTOR.scrollTargetAnchor}]`);

  anchorElements.forEach(element => {
    const headerHeight = document.querySelector(`.${SELECTOR.pageHeader}`).clientHeight;
    element.addEventListener('click', (event) => {
      event.preventDefault();
      const targetElement = document.querySelector(element.hash);
      const targetTop = targetElement.offsetTop - headerHeight - (headerHeight * 0.25);
      
      window.scroll({top: targetTop, left: 0, behavior: 'smooth'});
    })
  });
};
