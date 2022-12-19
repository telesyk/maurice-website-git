import { SELECTOR } from "../constants";

const documentOnScroll = () => {
  const headerElement = document.querySelector(`.${SELECTOR.pageHeader}`);
  document.addEventListener('scroll', () => {
    const topPosition = window.scrollY;
    if (topPosition > 1) {
      headerElement.classList.add(SELECTOR.isFixed);
    } else {
      headerElement.classList.remove(SELECTOR.isFixed);
    }
  })
};

export default documentOnScroll;
