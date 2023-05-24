import { openPopup, closePopup, fillInput, checkFieldErrors, focusPhoneInput, changePhoneInput, blurPhoneInput, isValidEmail, sendForm } from './functions.js';

document.addEventListener('DOMContentLoaded', ()  => {

    const inputApplicationName = document.querySelector('#application-support-project-name');
    const inputApplicationLastName = document.querySelector('#application-support-project-last-name');
    const inputApplicationSecondName = document.querySelector('#application-support-project-second-name');
    const inputApplicationPhone = document.querySelector('#application-support-project-phone');
    const inputApplicationMail = document.querySelector('#application-support-project-mail');
    const inputApplicationCompany = document.querySelector('#application-support-project-company');
    const inputApplicationQuest = document.querySelector('#application-support-project-quest');

    let phoneMaskApplicationh, maskOptions = { mask: '+{7} (000) 000-00-00' };
    phoneMaskApplicationh = IMask(inputApplicationPhone, maskOptions);

    document.querySelector('#form-application-support-project').addEventListener('click', () => {
        openPopup('popup-application-support-project', '#list-popups-form');
    })

    document.querySelector('#btn-application-support-project').addEventListener('click', () => {
        openPopup('popup-application-support-project', '#list-popups-form');
    })

    document.querySelector('#list-popups-form').addEventListener('mousedown', (e) => {
        if (!e.target.closest('.popup')) {
            closePopup('popup-application-support-project', '#list-popups-form', 'inputs-mask', phoneMaskApplicationh);
        }
    })

    document.querySelector('#application-support-project-close').addEventListener('click', () => {
        closePopup('popup-application-support-project', '#list-popups-form', 'inputs-mask', phoneMaskApplicationh);
    })

    inputApplicationName.addEventListener('input', function() {
        fillInput(this);
    })

    inputApplicationLastName.addEventListener('input', function() {
        fillInput(this);
    })

    inputApplicationSecondName.addEventListener('input', function() {
        fillInput(this);
    })

    inputApplicationMail.addEventListener('input', function() {
        fillInput(this);
        isValidEmail(this);
    })

    inputApplicationCompany.addEventListener('input', function() {
        fillInput(this);
    })

    inputApplicationQuest.addEventListener('input', function() {
        fillInput(this);
    })

    inputApplicationPhone.addEventListener('input', function() {
        changePhoneInput(this, phoneMaskApplicationh);
    })
    
    inputApplicationPhone.addEventListener('focus', function() {
        focusPhoneInput(this, phoneMaskApplicationh);
    })

    inputApplicationPhone.addEventListener('blur', function() {
        blurPhoneInput(this, phoneMaskApplicationh);
    })

    document.querySelector('#send-application-support-project').addEventListener('click', function(e) {
        let errors = 0;
        errors = checkFieldErrors(e, this, 'phone', inputApplicationPhone);
        errors += isValidEmail(inputApplicationMail, e);
        if (errors === 0) {
            sendForm(e, 'popup-application-support-project', '#list-popups-form');
            closePopup('popup-application-support-project', '#list-popups-form', 'inputs-mask', phoneMaskApplicationh);
        }
    })

});