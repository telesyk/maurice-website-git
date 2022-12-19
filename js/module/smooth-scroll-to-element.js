import { SELECTOR } from "../constants";

function smoothScrollToElement() {
  const elements = document.querySelectorAll(`[${SELECTOR.scrollTargetAnchor}]`);

  if (elements.length) elements.forEach(element => {
    const headerHeight = document.querySelector(`.${SELECTOR.pageHeader}`).clientHeight;
    element.addEventListener('click', (event) => {
      event.preventDefault();
      const targetElement = document.querySelector(element.hash);
      const targetTop = targetElement.offsetTop - headerHeight - (headerHeight * 0.25);
      
      window.scroll({top: targetTop, left: 0, behavior: 'smooth'});
    })
  });
}

export default smoothScrollToElement;
