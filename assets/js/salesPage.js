import { paginationTags } from './paginationTags.js';
import { openPopup, closePopup, fillInput, checkFieldErrors, focusPhoneInput, changePhoneInput, blurPhoneInput } from './functions.js';

document.addEventListener('DOMContentLoaded', ()  => {

    const inputName = document.querySelector('#promotion-consultation-name');
    const inputPhone = document.querySelector('#promotion-consultation-phone');
    const inputCompany = document.querySelector('#promotion-consultation-company');
    const inputPost = document.querySelector('#promotion-consultation-post');
    const inputDecs = document.querySelector('#promotion-consultation-desc');

    let phoneMask, maskOptions = { mask: '+{7} (000) 000-00-00' };
    phoneMask = IMask(inputPhone, maskOptions);

    document.querySelector('#sales-page-popups').addEventListener('mousedown', (e) => {
        if (!e.target.closest('.popup')) {
            closePopup('popup-catalog-solutions', '#sales-page-popups');
            closePopup('popup-virtual-showroom', '#sales-page-popups');
            closePopup('popup-promotion-consultation', '#sales-page-popups');
            closePopup('popup-promotion-consultation', '#sales-page-popups', 'inputs-mask', phoneMask);
        }
    })

    document.querySelector('#catalog-solutions-close').addEventListener('click', () => {
        closePopup('popup-catalog-solutions', '#sales-page-popups');
    })

    document.querySelector('#virtual-showroom-close').addEventListener('click', () => {
        closePopup('popup-virtual-showroom', '#sales-page-popups');
    })

    document.querySelector('#promotion-consultation-close').addEventListener('click', () => {
        closePopup('popup-promotion-consultation', '#sales-page-popups', 'inputs-mask', phoneMask);
    })

    inputName.addEventListener('input', function() {
        fillInput(this);
    })

    inputCompany.addEventListener('input', function() {
        fillInput(this);
    })

    inputPost.addEventListener('input', function() {
        fillInput(this);
    })


    inputDecs.addEventListener('input', function() {
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

    document.querySelector('#send-promotion-consultation').addEventListener('click', function(e) {
        checkFieldErrors(e, this, 'phone', inputPhone);
    })

    document.addEventListener('click', (e) => {
        const popupCatalog = e.target.closest('#catalog-sales');
        const popupShowroom = e.target.closest('#virtual-showroom');
        const popupPromotion = e.target.closest('#promotion-consultation');
        if (popupCatalog) 
        openPopup('popup-catalog-solutions', '#sales-page-popups');
        if (popupShowroom) 
        openPopup('popup-virtual-showroom', '#sales-page-popups');
        if (popupPromotion)
        openPopup('popup-promotion-consultation', '#sales-page-popups');
    })

    paginationTags('#sales-tags', '#sales-tags-page-prew', '#sales-tags-page-next', '#search-sales-tags');

});