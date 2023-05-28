import { openPopup, closePopup } from './functions.js';

document.addEventListener('DOMContentLoaded', ()  => {

    const popupPoster = document.querySelector('#popup-poster-about');

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
        if (showPopup) {
            if (showPopup.closest('.posters__block').dataset.event) {
                let data = JSON.parse(showPopup.closest('.posters__block').dataset.event.replace(/'/g, '"'));
                popupPoster.querySelector('#image-poster').setAttribute('src', data?.image);
                let blockNumber = popupPoster.querySelector('#number-poster');
                blockNumber.querySelector('p').textContent = data?.day;
                blockNumber.querySelector('span').textContent = data?.month;
                let blockTime = popupPoster.querySelector('#time-poster');
                blockTime.querySelector('p').textContent = data?.time;
                blockTime.querySelector('span').textContent = data?.dow;
                let blockDesc = popupPoster.querySelector('#desc-poster');
                blockDesc.querySelector('p').textContent = data?.address !== '' ? data?.address : 'Онлайн мероприятие';
                blockDesc.querySelector('a').textContent = data?.offline === '1' ? 'Показать на карте' : 'Ссылка на трансляцию';
                blockDesc.querySelector('a').setAttribute('href', data?.offline === '1' ? `https://yandex.ru/maps/?text=${data?.address}` : data?.broadcast);
                popupPoster.querySelectorAll('h2').forEach(item => {
                    item.textContent = data?.name;
                })
                popupPoster.querySelector('#second-text-poster').innerHTML = data?.desc;
                popupPoster.querySelector('#button-poster').setAttribute('href', data?.external);
                openPopup('popup-poster-about', '#list-popups');
            }
        }
    })
})