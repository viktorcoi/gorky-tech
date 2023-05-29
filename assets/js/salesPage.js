import { fillInput, openPopup, closePopup, checkFieldErrors, focusPhoneInput, changePhoneInput, blurPhoneInput, sendForm } from './functions.js';

document.addEventListener('DOMContentLoaded', ()  => {
    
    const inputName = document.querySelector('#take-part-name');
    const inputPhone = document.querySelector('#take-part-phone');
    const inputCompany = document.querySelector('#take-part-company');
    const inputQuest = document.querySelector('#take-part-desc');

    let phoneMask, maskOptions = { mask: '+{7} (000) 000-00-00' };
    phoneMask = IMask(inputPhone, maskOptions);

    const buttonsShowPopup = [
        document.querySelector('#take-part-customer'),
        document.querySelector('#take-part-provider')
    ]

    buttonsShowPopup.forEach(item => {
        item?.addEventListener('click', () => {
            openPopup('popup-take-part', '#list-popups-form');
            document.querySelector('#popup-take-part').querySelector('.popup__title').textContent = item.dataset.formtitle;
            document.querySelector('#popup-take-part').querySelector('input[name="form-title"]').value = item.dataset.formtitle;
        })
    })

    document.querySelector('#list-popups-form').addEventListener('mousedown', (e) => {
        if (!e.target.closest('.popup')) {
            closePopup('popup-catalog-solutions', '#list-popups-form');
            closePopup('popup-virtual-showroom', '#list-popups-form');
            closePopup('popup-take-part', '#list-popups-form', 'inputs-mask', phoneMask);
        }
    })

    document.querySelector('#catalog-solutions-close').addEventListener('click', () => {
        closePopup('popup-catalog-solutions', '#list-popups-form');
    })

    document.querySelector('#virtual-showroom-close').addEventListener('click', () => {
        closePopup('popup-virtual-showroom', '#list-popups-form');
    })

    document.querySelector('#take-part-close').addEventListener('click', () => {
        closePopup('popup-take-part', '#list-popups-form', 'inputs-mask', phoneMask);
    })

    inputName?.addEventListener('input', function() {
        fillInput(this);
    })

    inputCompany?.addEventListener('input', function() {
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

    document.addEventListener('click', (e) => {
        const popupCatalog = e.target.closest('#catalog-sales');
        const popupShowroom = e.target.closest('#virtual-showroom');
        if (popupCatalog) 
        openPopup('popup-catalog-solutions', '#list-popups-form');
        if (popupShowroom) 
        openPopup('popup-virtual-showroom', '#list-popups-form');
    })

    document.querySelector('#btn-participate-showroom').addEventListener('click', () => {
        closePopup('popup-virtual-showroom', '#list-popups-form');
        setTimeout(() => {
            openPopup('popup-ask-question', '#list-popups-form');
        }, 400);
    })

    document.querySelector('#send-take-part')?.addEventListener('click', function(e) {
        let errors = 0;
        errors = checkFieldErrors(e, this, 'phone', inputPhone);
        if (errors === 0) {
            sendForm(e, 'popup-take-part', '#list-popups-form');
            closePopup('popup-take-part', '#list-popups-form', 'inputs-mask', phoneMask);
        }
    })

});