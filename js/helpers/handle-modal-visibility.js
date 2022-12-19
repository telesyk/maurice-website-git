import { SELECTOR } from "../constants";

const handleModalVisibility = (event) => {
  event.preventDefault();
  
  const { currentTarget } = event;

  const modalWindow = currentTarget.hasAttribute(SELECTOR.modalTrigger)
    ? document.getElementById(currentTarget.getAttribute(SELECTOR.modalTrigger))
    : currentTarget.closest('.modal');

  if (modalWindow.dataset.hidden === 'false') {
    modalWindow.dataset.hidden = 'true';
  } else {
    modalWindow.dataset.hidden = 'false';
  }
  
  modalWindow.classList.toggle('modal-is-visible');
};

export default handleModalVisibility;
