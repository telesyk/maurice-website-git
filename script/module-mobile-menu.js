import { SELECTOR } from "./constants";

export default function mobileMenu() {
  const navbarElement = document.querySelector(SELECTOR.navbar);
  const mobileMenuButton = document.getElementById(SELECTOR.mobileMenu);
  
  function handleMobileMenu(event) {
    event.preventDefault();
    navbarElement.classList.toggle(SELECTOR.navbarActive);
  }
  
  mobileMenuButton.addEventListener('click', handleMobileMenu);
}
