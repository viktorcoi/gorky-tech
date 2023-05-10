import { paginationTags } from './paginationTags.js';

document.addEventListener('DOMContentLoaded', ()  => {

    if (document.querySelector('.main-slider')) {
        let slider = tns({
            container: '.main-slider',
            nav: false,
            prevButton: '#main-slider-prew',
            nextButton: '#main-slider-next',
            slideBy: 1,
            responsive: {
                1641: {
                    edgePadding: 190,
                    fixedWidth: 880,
                    gutter: 32,
                },
    
                851: {
                    edgePadding: 40,
                    fixedWidth: 664,
                    gutter: 18,
                },
                681: {
                    edgePadding: 40,
                    fixedWidth: 620,
                    gutter: 12,
                },
                0: {
                    edgePadding: 20,
                    fixedWidth: 268,
                    gutter: 10,
                    mouseDrag: true,
                }
            }
        });
    }
    
    let listSlides = document.querySelectorAll('.main-slider__slide');

    listSlides.forEach(item => {
        item.onmouseover = function () {
            listSlides.forEach(slide => {
                if (item !== slide && document.querySelector('body').dataset.theme === 'dark')
                slide.classList.add('not-hover');
            })
        };
        item.onmouseout = function () {
            listSlides.forEach((slide, slideId) => {
                slide.classList.remove('not-hover');
            })
        };
    })

    paginationTags('#main-tags', '#main-tags-page-prew', '#main-tags-page-next', '#search-main-tags');

});