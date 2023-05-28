import { getCookie } from './functions.js';


const language = getCookie('site_language');
 
    let script = document.createElement('script');
    script.src = `https://api-maps.yandex.ru/2.1/?lang=${language === 'ru' ? 'ru_RU' : 'en_US'}&amp;apikey=b535750c-712d-4483-bfd8-68f0dfb1e89a`;
    document.body.appendChild(script);

document.addEventListener('DOMContentLoaded', ()  => {
    let icon_type;
    let myPlacemark;

    if(document.querySelector("#contacts-map")) {

        script.onload = () => {
            ymaps.ready(renderMap);
        }
        const renderMap = () => {
            let place_location = $('#contacts-map').attr('data-company-location').split(',');
            let isgorkyai = $('#contacts-map').attr('isgorkyai');
            if (typeof isgorkyai !== typeof undefined && isgorkyai !== false) {
                icon_type = {
                    iconLayout: 'default#image',
                    iconImageHref: 'https://gorky.tech/assets/images/map_label.png',
                    iconImageSize: [90, 60],
                    iconImageOffset: [ -90/2 , -60]
                }
            } else {
                icon_type = {
                    preset: 'islands#governmentCircleIcon',
                    iconColor: '#a33a8c'
                }
            }        
            let myMap = new ymaps.Map("contacts-map", 
            { 
                center: place_location, 
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
            myPlacemark = new ymaps.Placemark(place_location, {}, icon_type );
            myMap.geoObjects.add(myPlacemark);
        }
    }
})