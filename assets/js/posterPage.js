import { openPopup, closePopup } from './functions.js';

document.addEventListener('DOMContentLoaded', ()  => {

    document.querySelector('#list-popups').addEventListener('mousedown', (e) => {
        if (!e.target.closest('.popup')) {
            closePopup('popup-poster-about', '#list-popups');
        }
    })

    document.querySelector('#poster-about-close').addEventListener('click', () => {
        closePopup('popup-poster-about', '#list-popups');
    })

    document.addEventListener('click', (e) => {
        const showPopup = e.target.closest('.posters__block-button')
        if (showPopup)
        openPopup('popup-poster-about', '#list-popups');
    })

})