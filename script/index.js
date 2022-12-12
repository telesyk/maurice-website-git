import { SELECTOR } from "./constants";
import mobileMenu from "./module-mobile-menu";
import formValidation from "./module-form-validation";

/* Mobile Navigation */
if (document.getElementById(SELECTOR.mobileMenu)) {
  mobileMenu();
}

/* Form validation */
if (document.getElementById(SELECTOR.contactForm)) {
  formValidation();
}
