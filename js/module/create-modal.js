import { MODAL } from '../constants';
import handleModalVisibility from '../helpers/handle-modal-visibility';

const getModalSize = (modalSize) => {
  const sizeObj= MODAL.sizes.find(size => size.name === modalSize);
  return !sizeObj ? MODAL.sizes[0].className : sizeObj.className;
};

const getHeaderTemplate = (heading) => `
  <header class="modal-header">
    <h2 class="modal-header-title">${heading}</h2>
  </header>
`;

const getBodyTemplate = (body) => `
  <div class="modal-body">
    ${body}
  </div>
`;

const getIframeTemplate = (url) => `
  <iframe class="modal-iframe" src="${url}" width="320" height="480"></iframe>
`;

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

/**
 * Create modal
 * @param {object} content - can has only two variables header & body
 * @param {string} header - content for header
 * @param {string} body - content for body
 * @param {string} pagePath - path to page that will be inserted in <iframe>
 * @param {object} restArgs - can has variables modalSize & attributes
 * @param {string} modalSize - provides a shortant variation of modal size {sm, lg, etc.}
 * @param {object} attributes - may contains an Objects of attributes for the modal
 *  */
const createModal = (content, restArgs) => {
  const ERROR_TITLE = 'Error in createModal function';
  if (!content || content === '') return console.error(`${ERROR_TITLE}: content is missed or undefined`);
  
  const { header, body, pagePath } = content;
  const modalSize = !restArgs ? null : restArgs.modalSize;
  const attributes = !restArgs ? null : restArgs.attributes;
  
  if (!body && !pagePath) return console.error(`${ERROR_TITLE}: there are no content to show in modal`);

  const pageContentUrl = pagePath
    ? `${window.location.protocol}//${window.location.host}/${pagePath}`
    : '';

  const parser = new DOMParser();
  const modalClassName = getModalSize(modalSize);
  const headerTemplate = !header ? null : getHeaderTemplate(header);
  const bodyTemplate = !pageContentUrl ? getBodyTemplate(body) : getIframeTemplate(pageContentUrl);
  const windowTemplate = getWindowTemplate(bodyTemplate, headerTemplate);
  const modalElement = parser.parseFromString(windowTemplate, 'text/html').body.children[0];
  
  modalElement.classList.add(modalClassName);

  if (attributes && !attributes.length) {
    for (const name in attributes) {
      modalElement.setAttribute(name, attributes[name]);
    }
  }
  
  const closeElement = modalElement.querySelector('.modal-close');
  closeElement.addEventListener('click', handleModalVisibility);

  return document.body.appendChild(modalElement);
};

export default createModal;
