import { fillInput, openPopup, closePopup, checkFieldErrors, focusPhoneInput, changePhoneInput, blurPhoneInput } from './functions.js';

document.addEventListener('DOMContentLoaded', ()  => {



    const inputName = document.querySelector('#ask-question-name');
    const inputPhone = document.querySelector('#ask-question-phone');
    const inputCompany = document.querySelector('#ask-question-company');
    const inputQuest = document.querySelector('#ask-question-quest');

    let phoneMask, maskOptions = { mask: '+{7} (000) 000-00-00' };
    phoneMask = IMask(inputPhone, maskOptions);

    const arrGraphs = [
        document.querySelector('#graph-vrp'),
        document.querySelector('#graph-export-ict'),
        document.querySelector('#graph-turnover-ict'),
        document.querySelector('#graph-average-po'),
        document.querySelector('#graph-quantity-ict')
    ]

    document.querySelector('#support-uav-question').addEventListener('click', () => {
        openPopup('popup-ask-question', '#support-uav-popups');
    })

    document.querySelector('#ask-question-close').addEventListener('click', () => {
        closePopup('popup-ask-question', '#support-uav-popups', 'inputs-mask', phoneMask);
    })

    document.querySelector('#support-uav-popups').addEventListener('mousedown', (e) => {
        if (!e.target.closest('.popup')) {
            closePopup('popup-ask-question', '#support-uav-popups', 'inputs-mask', phoneMask);
        }
    })

    inputName.addEventListener('input', function() {
        fillInput(this);
    })

    inputCompany.addEventListener('input', function() {
        fillInput(this);
    })

    inputQuest.addEventListener('input', function() {
        fillInput(this);
    })

    inputPhone.addEventListener('input', function() {
        changePhoneInput(this, phoneMask);
    })
    
    inputPhone.addEventListener('focus', function() {
        focusPhoneInput(this, phoneMask);
  
    })

    inputPhone.addEventListener('blur', function() {
        blurPhoneInput(this, phoneMask);
    })

    document.querySelector('#send-ask-question').addEventListener('click', function(e) {
        checkFieldErrors(e, this, 'phone', inputPhone);
    })

});