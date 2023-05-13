import { paginationTags } from './paginationTags.js';
import { openPopup, closePopup, fillInput, checkFieldErrors, focusPhoneInput, changePhoneInput, blurPhoneInput } from './functions.js';

document.addEventListener('DOMContentLoaded', ()  => {

    const inputGostekhName = document.querySelector('#question-gostekh-name');
    const inputGostekhPhone = document.querySelector('#question-gostekh-phone');
    const inputGostekhCompany = document.querySelector('#question-gostekh-company');
    const inputGostekhQuest = document.querySelector('#question-gostekh-quest');

    const inputApplicationName = document.querySelector('#application-support-project-name');
    const inputApplicationLastName = document.querySelector('#application-support-project-last-name');
    const inputApplicationSecondName = document.querySelector('#application-support-project-second-name');
    const inputApplicationPhone = document.querySelector('#application-support-project-phone');
    const inputApplicationMail = document.querySelector('#application-support-project-mail');
    const inputApplicationCompany = document.querySelector('#application-support-project-company');
    const inputApplicationQuest = document.querySelector('#application-support-project-quest');

    let phoneMaskGostekh, phoneMaskApplicationh, maskOptions = { mask: '+{7} (000) 000-00-00' };
    phoneMaskGostekh = IMask(inputGostekhPhone, maskOptions);
    phoneMaskApplicationh = IMask(inputApplicationPhone, maskOptions);

    document.querySelector('#question-gostekh').addEventListener('click', () => {
        openPopup('popup-question-gostekh', '#solutions-page-popups');
    })

    document.querySelector('#form-application-support-project').addEventListener('click', () => {
        openPopup('popup-application-support-project', '#solutions-page-popups');
    })

    document.querySelector('#btn-application-support-project').addEventListener('click', () => {
        openPopup('popup-application-support-project', '#solutions-page-popups');
    })

    document.querySelector('#solutions-page-popups').addEventListener('mousedown', (e) => {
        if (!e.target.closest('.popup')) {
            closePopup('popup-question-gostekh', '#solutions-page-popups', 'inputs-mask', phoneMaskGostekh);
            closePopup('popup-application-support-project', '#solutions-page-popups', 'inputs-mask', phoneMaskApplicationh);
        }
    })

    document.querySelector('#question-gostekh-close').addEventListener('click', () => {
        closePopup('popup-question-gostekh', '#solutions-page-popups', 'inputs-mask', phoneMaskGostekh);
    })

    document.querySelector('#application-support-project-close').addEventListener('click', () => {
        closePopup('popup-application-support-project', '#solutions-page-popups', 'inputs-mask', phoneMaskApplicationh);
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
        changePhoneInput(this, phoneMaskGostekh);
    })
    
    inputGostekhPhone.addEventListener('focus', function() {
        focusPhoneInput(this, phoneMaskGostekh);
    })

    inputGostekhPhone.addEventListener('blur', function() {
        blurPhoneInput(this, phoneMaskGostekh);
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
    })

    inputApplicationCompany.addEventListener('input', function() {
        fillInput(this);
    })

    inputApplicationQuest.addEventListener('input', function() {
        fillInput(this);
    })

    inputApplicationPhone.addEventListener('input', function() {
        changePhoneInput(this, phoneMaskGostekh);
    })
    
    inputApplicationPhone.addEventListener('focus', function() {
        focusPhoneInput(this, phoneMaskGostekh);
    })

    inputApplicationPhone.addEventListener('blur', function() {
        blurPhoneInput(this, phoneMaskGostekh);
    })

    document.querySelector('#send-question-gostekh').addEventListener('click', function(e) {
        checkFieldErrors(e, this, 'phone', inputGostekhPhone);
    })

    document.querySelector('#send-application-support-project').addEventListener('click', function(e) {
        checkFieldErrors(e, this, 'phone', inputApplicationPhone);
    })

    paginationTags('#solutions-tags', '#solutions-tags-page-prew', '#solutions-tags-page-next', '#search-solutions-tags');

});