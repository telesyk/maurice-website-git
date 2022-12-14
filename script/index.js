import { SELECTOR } from "./constants";
import mobileMenu from "./module-mobile-menu";
import formValidation from "./module-form-validation";
import search from "./module-search";

window.onload = () => {
  /* Mobile Navigation */
  if (document.getElementById(SELECTOR.mobileMenu)) {
    mobileMenu();
  }
  
  /* Form validation */
  if (document.getElementById(SELECTOR.contactForm)) {
    formValidation();
  }

  /* Search Form */
  if (document.getElementById(SELECTOR.searchForm)) {
    search();
  }
};
