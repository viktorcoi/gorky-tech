import { openPopup, closePopup } from './functions.js';

document.addEventListener('DOMContentLoaded', ()  => {

    const btnPopups = document.querySelectorAll('.personnel-info__block');
    const infoPopups = document.querySelectorAll('.popup-personnel-info');
    const wrapperPopup = document.querySelector('#popup-personnel-about');

    btnPopups.forEach(item => {
        item.addEventListener('click', function() {
            openPopup('popup-personnel-about', '#list-popups');
            infoPopups.forEach(popup => {
                if (item.dataset.popup === popup.dataset.popup) {
                    popup.style.display = 'block';
                    wrapperPopup.style.height = 'unset';
                    let blockScroll = popup.querySelector('.popup__desc-page');
                    let buttonInPopup = popup.querySelector('.personnel-about__btn');
                    if (blockScroll) {
                        blockScroll.classList.remove('overflow');
                        blockScroll.style.height = 'unset'
                    }
                    if (wrapperPopup.offsetHeight > (window.innerHeight - 50)) {
                        let margin = 0;
                        if (buttonInPopup)
                        margin = buttonInPopup.offsetHeight
                        wrapperPopup.style.height = '80%'
                        if (blockScroll) {
                            blockScroll.classList.add('overflow');
                            blockScroll.style.height = `calc(100% - ${(blockScroll.offsetTop / 1.2) + margin}px)`
                        }
                    }
                }
            })
        })
    })

    const hideInfoPopup = () => {
        setTimeout(() => {
            infoPopups.forEach(popup => {
                popup.style.display = 'none';
            })
        }, 300)
    }

    document.querySelector('#list-popups').addEventListener('mousedown', (e) => {
        if (!e.target.closest('.popup')) {
            closePopup('popup-personnel-about', '#list-popups');
            hideInfoPopup();
        }
    })

    document.querySelector('#personnel-about-close').addEventListener('click', () => {
        closePopup('popup-personnel-about', '#list-popups');
        hideInfoPopup();
    })

    window.addEventListener('resize', () => {
        closePopup('popup-personnel-about', '#list-popups');
        hideInfoPopup();
    });

})