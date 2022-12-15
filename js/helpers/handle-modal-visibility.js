import { SELECTOR } from "../constants";

const handleModalVisibility = (event) => {
  event.preventDefault();
  
  const { target } = event;

  const modalWindow = target.hasAttribute(SELECTOR.modalWindowTrigger)
    ? document.getElementById(target.getAttribute(SELECTOR.modalWindowTrigger))
    : target.closest('.modal');

  if (modalWindow.dataset.hidden === 'false') {
    modalWindow.dataset.hidden = 'true';
  } else {
    modalWindow.dataset.hidden = 'false';
  }
  
  modalWindow.classList.toggle('modal-is-visible');
};

export default handleModalVisibility;
