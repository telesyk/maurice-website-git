const $bd9e6dce1ba74e9b$export$c63acf214e1d55ea = {
    mobileMenu: "hamburger-menu",
    navbar: ".navbar",
    navbarActive: "is-active",
    contactForm: "contactForm",
    formGroup: ".form-group",
    formError: "has-danger",
    formSuccess: "has-success",
    formControl: ".form-control",
    formControlRequired: "[required]",
    formControlHidden: "[hidden]",
    formSubmit: "formSubmit",
    formStatus: "formStatus"
};
const $bd9e6dce1ba74e9b$export$61171c632678b12e = {
    serviceId: "service_55ll7kj",
    templateId: "template_xclhllr",
    emptyFieldMessage: "There is some empty field!",
    invalidEmailMessage: "Email is not valid",
    successMessage: "Successfully sent!"
};



function $15713f0b0fc49bee$export$2e2bcd8739ae039() {
    const navbarElement = document.querySelector((0, $bd9e6dce1ba74e9b$export$c63acf214e1d55ea).navbar);
    const mobileMenuButton = document.getElementById((0, $bd9e6dce1ba74e9b$export$c63acf214e1d55ea).mobileMenu);
    function handleMobileMenu(event) {
        event.preventDefault();
        navbarElement.classList.toggle((0, $bd9e6dce1ba74e9b$export$c63acf214e1d55ea).navbarActive);
    }
    mobileMenuButton.addEventListener("click", handleMobileMenu);
}



function $7b77acb5d0d30559$export$2e2bcd8739ae039() {
    const contactForm = document.getElementById((0, $bd9e6dce1ba74e9b$export$c63acf214e1d55ea).contactForm);
    const formControls = contactForm.querySelectorAll((0, $bd9e6dce1ba74e9b$export$c63acf214e1d55ea).formControl);
    const formControlsRequired = contactForm.querySelectorAll((0, $bd9e6dce1ba74e9b$export$c63acf214e1d55ea).formControlRequired);
    const formControlsHidden = contactForm.querySelectorAll((0, $bd9e6dce1ba74e9b$export$c63acf214e1d55ea).formControlHidden);
    const formSubmitButton = document.getElementById((0, $bd9e6dce1ba74e9b$export$c63acf214e1d55ea).formSubmit);
    function updateFormStatus(message, status) {
        const statusElement = document.getElementById((0, $bd9e6dce1ba74e9b$export$c63acf214e1d55ea).formStatus);
        if (message.length < 1) statusElement.innerHTML = "";
        else {
            const messageElement = document.createElement("small");
            const statusClass = status === "error" ? (0, $bd9e6dce1ba74e9b$export$c63acf214e1d55ea).formError : (0, $bd9e6dce1ba74e9b$export$c63acf214e1d55ea).formSuccess;
            messageElement.className = statusClass;
            messageElement.textContent = message;
            statusElement.innerHTML = "";
            statusElement.appendChild(messageElement);
        }
    }
    function isFieldEmpty(field) {
        const value = field.value.trim();
        return value.length <= 0;
    }
    function isHiddenData() {
        let isHiddenEmptyCount = 0;
        formControlsHidden.forEach((field)=>{
            const isEmpty = isFieldEmpty(field);
            isHiddenEmptyCount += !isEmpty ? 0 : 1;
        });
        return isHiddenEmptyCount === formControlsHidden.length;
    }
    function isRequiredData() {
        let isRequiredEmptyCount = 0;
        formControlsRequired.forEach((field)=>{
            const isEmpty = isFieldEmpty(field);
            if (isEmpty) {
                field.closest((0, $bd9e6dce1ba74e9b$export$c63acf214e1d55ea).formGroup).classList.add((0, $bd9e6dce1ba74e9b$export$c63acf214e1d55ea).formError);
                field.closest((0, $bd9e6dce1ba74e9b$export$c63acf214e1d55ea).formGroup).classList.remove((0, $bd9e6dce1ba74e9b$export$c63acf214e1d55ea).formSuccess);
                isRequiredEmptyCount += 1;
            } else {
                field.closest((0, $bd9e6dce1ba74e9b$export$c63acf214e1d55ea).formGroup).classList.remove((0, $bd9e6dce1ba74e9b$export$c63acf214e1d55ea).formError);
                field.closest((0, $bd9e6dce1ba74e9b$export$c63acf214e1d55ea).formGroup).classList.add((0, $bd9e6dce1ba74e9b$export$c63acf214e1d55ea).formSuccess);
            }
        });
        return isRequiredEmptyCount === 0;
    }
    function getFormData() {
        const formData = {};
        formControls.forEach((field)=>formData[field.name] = field.value.trim());
        return formData;
    }
    function validEmail(value) {
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const isValid = value && value.match(validRegex) ? true : false;
        if (!isValid) {
            let emailElement;
            formControls.forEach((field)=>{
                if (field.name === "email") emailElement = field;
            });
            emailElement.closest((0, $bd9e6dce1ba74e9b$export$c63acf214e1d55ea).formGroup).classList.add((0, $bd9e6dce1ba74e9b$export$c63acf214e1d55ea).formError);
            emailElement.closest((0, $bd9e6dce1ba74e9b$export$c63acf214e1d55ea).formGroup).classList.remove((0, $bd9e6dce1ba74e9b$export$c63acf214e1d55ea).formSuccess);
        }
        updateFormStatus("");
        return isValid;
    }
    function clearForm() {
        formControls.forEach((field)=>{
            field.value = "";
            field.closest((0, $bd9e6dce1ba74e9b$export$c63acf214e1d55ea).formGroup).classList.remove((0, $bd9e6dce1ba74e9b$export$c63acf214e1d55ea).formError);
            field.closest((0, $bd9e6dce1ba74e9b$export$c63acf214e1d55ea).formGroup).classList.remove((0, $bd9e6dce1ba74e9b$export$c63acf214e1d55ea).formSuccess);
        });
    }
    function sendEmail(templateParams) {
        emailjs.send((0, $bd9e6dce1ba74e9b$export$61171c632678b12e).serviceId, (0, $bd9e6dce1ba74e9b$export$61171c632678b12e).templateId, templateParams).then(function(response) {
            if (response.status === 200 && response.text === "OK") {
                updateFormStatus((0, $bd9e6dce1ba74e9b$export$61171c632678b12e).successMessage, "success");
                clearForm();
                setTimeout(()=>updateFormStatus(""), 7000);
            }
        }, function(err) {
            console.error("FAILED...", err);
        });
    }
    function handleSubmitForm(e) {
        e.preventDefault();
        const formData = getFormData();
        const isRequired = isRequiredData();
        const isHiddenEmpty = isHiddenData();
        const isValidEmail = validEmail(formData.email);
        if (!isRequired) updateFormStatus((0, $bd9e6dce1ba74e9b$export$61171c632678b12e).emptyFieldMessage, "error");
        if (!isValidEmail) updateFormStatus((0, $bd9e6dce1ba74e9b$export$61171c632678b12e).invalidEmailMessage, "error");
        if (isRequired && isHiddenEmpty && isValidEmail) sendEmail(formData);
    }
    if (formSubmitButton) formSubmitButton.addEventListener("click", handleSubmitForm);
}


/* Mobile Navigation */ if (document.getElementById((0, $bd9e6dce1ba74e9b$export$c63acf214e1d55ea).mobileMenu)) (0, $15713f0b0fc49bee$export$2e2bcd8739ae039)();
/* Form validation */ if (document.getElementById((0, $bd9e6dce1ba74e9b$export$c63acf214e1d55ea).contactForm)) (0, $7b77acb5d0d30559$export$2e2bcd8739ae039)();


//# sourceMappingURL=index.6d7c2487.js.map
