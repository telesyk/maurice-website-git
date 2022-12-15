import { MODAL } from './constants';
import handleModalVisibility from './module-handle-modal-visibility';

/**
 * Modal Sizes
 * - sm - for small - default
 * - lg - for large 
 * */
const getModalSize = (modalSize) => {
  const sizeObj= MODAL.sizes.find(size => size.name === modalSize);

  return !sizeObj ? MODAL.sizes[0].className : sizeObj.className;
};

/* HeaderTemplate */
const getHeaderTemplate = (heading) => `
  <header class="modal-header">
    <h2 class="modal-header-title">${heading}</h2>
  </header>
`;

/* BodyTemplate */
const getBodyTemplate = (body) => `
  <div class="modal-body">
    <p>${body}</p>
  </div>
`;

/* ModalWindow Template */
const getWindowTemplate = (bodyTemplate, headerTemplate) => {
  const modalBody = !headerTemplate 
    ? bodyTemplate
    : headerTemplate + bodyTemplate;

  return `
    <div class="modal" data-hidden="true">
      <div class="modal-container">
        <div class="modal-wrapper">
          ${modalBody}
        </div>
        <button class="modal-close">
          <span hidden>Close</span>
        </button>
      </div>
    </div>
  `;
};

/* Create modal */
const createModal = (content, modalSize) => {
  const { headerContent, bodyContent } = content;
  
  if (!bodyContent) return console.log('Error! There are no content to show in modal');

  const parser = new DOMParser();
  const fragment = new DocumentFragment();
  const modalClassName = getModalSize(modalSize);
  const headerTemplate = !headerContent ? null : getHeaderTemplate(headerContent);
  const bodyTemplate = getBodyTemplate(bodyContent);
  const windowTemplate = getWindowTemplate(bodyTemplate, headerTemplate);
  const modalElement = parser.parseFromString(windowTemplate, 'text/html').body.children[0];
  
  modalElement.classList.add(modalClassName);
  
  const closeElement = modalElement.querySelector('.modal-close');
  closeElement.addEventListener('click', handleModalVisibility);

  fragment.appendChild(modalElement);

  return document.body.appendChild(fragment);
};

export default createModal;
