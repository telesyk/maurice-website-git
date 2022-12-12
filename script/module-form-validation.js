import { SELECTOR } from "./constants";

export default function formValidation() {
  const contactForm = document.getElementById(SELECTOR.contactForm);
  const formControls = contactForm.querySelectorAll(SELECTOR.formControl);
  const formControlsRequired = contactForm.querySelectorAll(SELECTOR.formControlRequired);
  const formControlsHidden = contactForm.querySelectorAll(SELECTOR.formControlHidden);
  const formSubmitButton = document.getElementById(SELECTOR.formSubmit);
  
  function updateFormStatus(message, status) {
    const statusElement = document.getElementById(SELECTOR.formStatus);

    if (message.length < 1) {
      statusElement.innerHTML = '';
    } else {
      const messageElement = document.createElement('small');
      const statusClass = status === 'error' ? SELECTOR.formError : SELECTOR.formSuccess;
      messageElement.className = statusClass;
      messageElement.textContent = message;
      statusElement.innerHTML = '';
      statusElement.appendChild(messageElement);
    }
  }

  function isFieldEmpty(field) {
    const value = field.value.trim();
    return value.length <= 0;
  }

  function isHiddenData() {
    let isHiddenEmptyCount = 0;
    formControlsHidden.forEach(field => {
      const isEmpty = isFieldEmpty(field);
      isHiddenEmptyCount += !isEmpty ? 0 : 1;
    });
    return isHiddenEmptyCount === formControlsHidden.length;
  }

  function isRequiredData() {
    let isRequiredEmptyCount = 0;
    formControlsRequired.forEach(field => {
      const isEmpty = isFieldEmpty(field);
      if (isEmpty) {
        field.closest(SELECTOR.formGroup).classList.add(SELECTOR.formError);
        field.closest(SELECTOR.formGroup).classList.remove(SELECTOR.formSuccess);
        isRequiredEmptyCount += 1;
      } else {
        field.closest(SELECTOR.formGroup).classList.remove(SELECTOR.formError);
        field.closest(SELECTOR.formGroup).classList.add(SELECTOR.formSuccess);
      }
    });

    return isRequiredEmptyCount === 0;
  }

  function getFormData() {
    const formData = [];
    formControls.forEach(field => {
      const newData = {
        name: field.name,
        value: field.value.trim(),
      };
      formData.push(newData);
    });
    return formData;
  }

  function validEmail(value) {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const isValid = value.match(validRegex) ? true : false;
    if (!isValid) {
      let emailElement;
      formControls.forEach(field => {
        if (field.name === 'email') emailElement = field;
      });
      emailElement.closest(SELECTOR.formGroup).classList.add(SELECTOR.formError);
      emailElement.closest(SELECTOR.formGroup).classList.remove(SELECTOR.formSuccess);
    }
    updateFormStatus('');
    return isValid;
  }

  function clearForm() {
    formControls.forEach(field => {
      field.value = '';
      field.closest(SELECTOR.formGroup).classList.remove(SELECTOR.formError);
      field.closest(SELECTOR.formGroup).classList.remove(SELECTOR.formSuccess);
    });
  }
  
  function handleSubmitForm(e) {
    e.preventDefault();

    const formData = getFormData();
    const isRequired = isRequiredData();
    const isHiddenEmpty = isHiddenData();
    const emailData = formData.find(item => item.name === 'email');
    const isValidEmail = validEmail(emailData.value);

    if (!isRequired) updateFormStatus('There is some empty field!', 'error');
    if (!isValidEmail) updateFormStatus('Email is not valid', 'error');

    if (isRequired && isHiddenEmpty && isValidEmail) {
      console.log(formData);
      updateFormStatus('Successfully sent!', 'success');
      clearForm();
      setTimeout(() => {
        updateFormStatus('');
      }, 10000);
    }
  }
  
  if (formSubmitButton) {
    formSubmitButton.addEventListener('click', handleSubmitForm);
  }
}
