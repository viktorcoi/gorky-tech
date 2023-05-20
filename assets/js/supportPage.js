import { fillInput, openPopup, closePopup, checkFieldErrors, focusPhoneInput, changePhoneInput, blurPhoneInput } from './functions.js';

document.addEventListener('DOMContentLoaded', ()  => {

    if (document.querySelector('#support-page-popups')) {
        const inputName = document.querySelector('#ask-question-name');
        const inputPhone = document.querySelector('#ask-question-phone');
        const inputCompany = document.querySelector('#ask-question-company');
        const inputQuest = document.querySelector('#ask-question-quest');
    
        let phoneMask, maskOptions = { mask: '+{7} (000) 000-00-00' };
        phoneMask = IMask(inputPhone, maskOptions);
    
        document.querySelector('#support-question').addEventListener('click', () => {
            openPopup('popup-ask-question', '#support-page-popups');
        })

        document.querySelector('#btn-bot-telegram').addEventListener('click', () => {
            openPopup('popup-bot-telegram', '#support-page-popups');
        })

        document.querySelector('#btn-startup-nn').addEventListener('click', () => {
            openPopup('popup-out-startup-nn', '#support-page-popups');
        })

        document.querySelector('#btn-preferential-lending').addEventListener('click', () => {
            openPopup('popup-out-preferential-lending', '#support-page-popups');
        })
    
        document.querySelector('#bot-telegram-close').addEventListener('click', () => {
            closePopup('popup-bot-telegram', '#support-page-popups');
        })

        document.querySelector('#out-preferential-lending-close').addEventListener('click', () => {
            closePopup('popup-out-preferential-lending', '#support-page-popups');
        })

        document.querySelector('#out-startup-nn-close').addEventListener('click', () => {
            closePopup('popup-out-startup-nn', '#support-page-popups');
        })

        document.querySelector('#ask-question-close').addEventListener('click', () => {
            closePopup('popup-ask-question', '#support-page-popups', 'inputs-mask', phoneMask);
        })
    
        document.querySelector('#support-page-popups').addEventListener('mousedown', (e) => {
            if (!e.target.closest('.popup')) {
                closePopup('popup-ask-question', '#support-page-popups', 'inputs-mask', phoneMask);
                closePopup('popup-bot-telegram', '#support-page-popups');
                closePopup('popup-out-startup-nn', '#support-page-popups');
                closePopup('popup-out-preferential-lending', '#support-page-popups');
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
    }


})