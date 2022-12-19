import { SELECTOR } from "../constants";

const handleModalVisibility = (event) => {
  event.preventDefault();
  
  const { target } = event;

  const modalWindow = target.hasAttribute(SELECTOR.modalTrigger)
    ? document.getElementById(target.getAttribute(SELECTOR.modalTrigger))
    : target.closest('.modal');

  if (modalWindow.dataset.hidden === 'false') {
    modalWindow.dataset.hidden = 'true';
  } else {
    modalWindow.dataset.hidden = 'false';
  }
  
  modalWindow.classList.toggle('modal-is-visible');
};

export default handleModalVisibility;
