import { fillInput, openPopup, closePopup, checkFieldErrors, focusPhoneInput, changePhoneInput, blurPhoneInput } from './functions.js';

document.addEventListener('DOMContentLoaded', ()  => {

    const showGraph = (el) => {
        let rect = el.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            el.classList.add('animation-show');
        }
    }

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

    document.querySelector('#analysts-question').addEventListener('click', () => {
        openPopup('popup-ask-question', '#analytics-page-popups');
    })

    document.querySelector('#order-certificate').addEventListener('click', () => {
        openPopup('popup-ask-question', '#analytics-page-popups');
    })

    document.querySelector('#ask-question-close').addEventListener('click', () => {
        closePopup('popup-ask-question', '#analytics-page-popups', 'inputs-mask', phoneMask);
    })

    document.querySelector('#analytics-page-popups').addEventListener('mousedown', (e) => {
        if (!e.target.closest('.popup')) {
            closePopup('popup-ask-question', '#analytics-page-popups', 'inputs-mask', phoneMask);
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


    window.addEventListener('scroll', function() {
        if (window.innerWidth > 1024) {
            arrGraphs.forEach(graph => {
                showGraph(graph);
            })
        }
    });

});