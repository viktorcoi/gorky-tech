import { fillInput, openPopup, closePopup, checkFieldErrors, focusPhoneInput, changePhoneInput, blurPhoneInput } from './functions.js';

document.addEventListener('DOMContentLoaded', ()  => {
    
    if (document.querySelector('#list-popups-form')) {
        
        const inputName = document.querySelector('#ask-question-name');
        const inputPhone = document.querySelector('#ask-question-phone');
        const inputCompany = document.querySelector('#ask-question-company');
        const inputPost = document.querySelector('#ask-question-post');
        const inputQuest = document.querySelector('#ask-question-quest');
    
        let phoneMask, maskOptions = { mask: '+{7} (000) 000-00-00' };
        phoneMask = IMask(inputPhone, maskOptions);

        const buttonsShowPopup = [
            document.querySelector('#analysts-question'),
            document.querySelector('#order-certificate'),
            document.querySelector('#popularization-question'),
            document.querySelector('#promotion-consultation'),
            document.querySelector('#question-gostekh'),
            document.querySelector('#support-question'),
            document.querySelector('#support-uav-question')
        ]

        buttonsShowPopup.forEach(item => {
            item?.addEventListener('click', () => {
                openPopup('popup-ask-question', '#list-popups-form');
            })
        })
      
        document.querySelector('#ask-question-close')?.addEventListener('click', () => {
            closePopup('popup-ask-question', '#list-popups-form', 'inputs-mask', phoneMask);
        })
    
        document.querySelector('#list-popups-form')?.addEventListener('mousedown', (e) => {
            if (!e.target.closest('.popup')) {
                closePopup('popup-ask-question', '#list-popups-form', 'inputs-mask', phoneMask);
            }
        })
    
        inputName?.addEventListener('input', function() {
            fillInput(this);
        })
    
        inputCompany?.addEventListener('input', function() {
            fillInput(this);
        })

        inputPost?.addEventListener('input', function() {
            fillInput(this);
        })
    
        inputQuest?.addEventListener('input', function() {
            fillInput(this);
        })
    
        inputPhone?.addEventListener('input', function() {
            changePhoneInput(this, phoneMask);
        })
        
        inputPhone?.addEventListener('focus', function() {
            focusPhoneInput(this, phoneMask);
        })
    
        inputPhone?.addEventListener('blur', function() {
            blurPhoneInput(this, phoneMask);
        })
    
        document.querySelector('#send-ask-question')?.addEventListener('click', function(e) {
            checkFieldErrors(e, this, 'phone', inputPhone);
        })
    }

});