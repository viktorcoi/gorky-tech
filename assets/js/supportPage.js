import { openPopup, closePopup } from './functions.js';

document.addEventListener('DOMContentLoaded', ()  => {

    if (document.querySelector('#list-popups-form')) {
       
        document.querySelector('#btn-bot-telegram')?.addEventListener('click', () => {
            openPopup('popup-bot-telegram', '#list-popups-form');
        })

        document.querySelector('#list-popups-form')?.addEventListener('mousedown', (e) => {
            if (!e.target.closest('.popup')) {
                closePopup('popup-bot-telegram', '#list-popups-form');
            }
        })

        document.querySelector('#bot-telegram-close')?.addEventListener('click', () => {
            closePopup('popup-bot-telegram', '#list-popups-form');
        })
    }

    if (document.querySelector('.support-page')) {

        document.querySelector('#btn-startup-nn')?.addEventListener('click', () => {
            openPopup('popup-out-startup-nn', '#list-popups-form');
        })

        document.querySelector('#btn-preferential-lending')?.addEventListener('click', () => {
            openPopup('popup-out-preferential-lending', '#list-popups-form');
        })

        document.querySelector('#out-preferential-lending-close')?.addEventListener('click', () => {
            closePopup('popup-out-preferential-lending', '#list-popups-form');
        })

        document.querySelector('#out-startup-nn-close')?.addEventListener('click', () => {
            closePopup('popup-out-startup-nn', '#list-popups-form');
        })

        document.querySelector('#list-popups-form')?.addEventListener('mousedown', (e) => {
            if (!e.target.closest('.popup')) {
                closePopup('popup-out-startup-nn', '#list-popups-form');
                closePopup('popup-out-preferential-lending', '#list-popups-form');
            }
        })
    }

})