document.addEventListener('DOMContentLoaded', ()  => {

    let slider = tns({
        container: '.main-slider',
        slideBy: 'page',
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
            768: {
                edgePadding: 40,
                fixedWidth: 620,
                gutter: 12,
            }
        }
    });

});