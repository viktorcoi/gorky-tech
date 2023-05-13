import { paginationTags } from './paginationTags.js';
import { openPopup, closePopup, fillInput, checkFieldErrors, focusPhoneInput, changePhoneInput, blurPhoneInput } from './functions.js';

document.addEventListener('DOMContentLoaded', ()  => {

    const inputGostekhName = document.querySelector('#question-gostekh-name');
    const inputGostekhPhone = document.querySelector('#question-gostekh-phone');
    const inputGostekhCompany = document.querySelector('#question-gostekh-company');
    const inputGostekhQuest = document.querySelector('#question-gostekh-desc');

    let phoneMask, maskOptions = { mask: '+{7} (000) 000-00-00' };
    phoneMask = IMask(inputGostekhPhone, maskOptions);

    document.querySelector('#question-gostekh').addEventListener('click', () => {
        openPopup('popup-question-gostekh', '#solutions-page-popups');
    })

    document.querySelector('#solutions-page-popups').addEventListener('mousedown', (e) => {
        if (!e.target.closest('.popup')) {
            closePopup('popup-question-gostekh', '#solutions-page-popups', 'inputs-mask', phoneMask);
        }
    })

    document.querySelector('#question-gostekh-close').addEventListener('click', () => {
        closePopup('popup-question-gostekh', '#solutions-page-popups', 'inputs-mask', phoneMask);
    })

    document.querySelector('#send-question-gostekh').addEventListener('click', function(e) {
        checkFieldErrors(e, this, 'phone', inputGostekhPhone);
    })


    inputGostekhName.addEventListener('input', function() {
        fillInput(this);
    })

    inputGostekhCompany.addEventListener('input', function() {
        fillInput(this);
    })

    inputGostekhQuest.addEventListener('input', function() {
        fillInput(this);
    })


    inputGostekhPhone.addEventListener('input', function() {
        changePhoneInput(this, phoneMask);
    })
    
    inputGostekhPhone.addEventListener('focus', function() {
        focusPhoneInput(this, phoneMask);
  
    })

    inputGostekhPhone.addEventListener('blur', function() {
        blurPhoneInput(this, phoneMask);
    })


    paginationTags('#solutions-tags', '#solutions-tags-page-prew', '#solutions-tags-page-next', '#search-solutions-tags');

});