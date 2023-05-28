import { getCookie } from './functions.js';

document.addEventListener('DOMContentLoaded', ()  => {
    if(document.querySelector("#contacts-map")) {
        const language = getCookie('site_language');
        let script = document.createElement('script');
        script.src = `https://api-maps.yandex.ru/2.1/?lang=${language === 'ru' ? 'ru_RU' : 'en_US'}&amp;apikey=b11312ae-7d16-42a3-a763-eca387d914d4`;
        document.body.appendChild(script);
        script.onload = () => {
            ymaps.ready(renderMap);
        }
        const renderMap = () => {
            let icon_type = {
                iconLayout: 'default#image',
                iconImageHref: 'https://gorky.tech/assets/images/map_label.png',
                iconImageSize: [90, 60],
                iconImageOffset: [ -90/2 , -60]
            }              
            let myMap = new ymaps.Map("contacts-map", 
            { 
                center: [56.32537606277242, 44.01494270171355], 
                zoom: 17, 
                controls: []
            }, 
            {
                suppressMapOpenBlock: true
            },
            );
            let zoomControl = new ymaps.control.ZoomControl({
                options: {
                    size: "small",
                    position: { top: '15px', left: '15px' }
                }       
            });
            myMap.controls.add(zoomControl);
            let myPlacemark = new ymaps.Placemark([56.32537606277242, 44.01494270171355], {}, icon_type );
            myMap.geoObjects.add(myPlacemark);
        }
    }
})