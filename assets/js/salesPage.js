import { openPopup, closePopup } from './functions.js';

document.addEventListener('DOMContentLoaded', ()  => {

    document.querySelector('#list-popups-form').addEventListener('mousedown', (e) => {
        if (!e.target.closest('.popup')) {
            closePopup('popup-catalog-solutions', '#list-popups-form');
            closePopup('popup-virtual-showroom', '#list-popups-form');
        }
    })

    document.querySelector('#catalog-solutions-close').addEventListener('click', () => {
        closePopup('popup-catalog-solutions', '#list-popups-form');
    })

    document.querySelector('#virtual-showroom-close').addEventListener('click', () => {
        closePopup('popup-virtual-showroom', '#list-popups-form');
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

});