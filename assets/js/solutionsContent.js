document.addEventListener('DOMContentLoaded', ()  => {

    const blockButtons = document.querySelector('#solutions-content-slider-buttons');
    const sliderNextButton = document.querySelector('#solutions-content-slider-next');
    const sliderPrewButton = document.querySelector('#solutions-content-slider-prew');
    
    if (document.querySelector('.solutions-content__slider')) {
        let slider = tns({
            container: '.solutions-content__slider',
            nav: false,
            prevButton: '#solutions-content-slider-prew',
            nextButton: '#solutions-content-slider-next',
            slideBy: 1,
            preventScrollOnTouch: 'auto',
            mouseDrag: true,
            responsive: {
                2561: {
                    edgePadding: 1150,
                    fixedWidth: 1020,
                    gutter: 32,
                },
                1921: {
                    edgePadding: 510,
                    fixedWidth: 1020,
                    gutter: 32,
                },
                1641: {
                    edgePadding: 190,
                    fixedWidth: 1020,
                    gutter: 32,
                },
    
                851: {
                    edgePadding: 40,
                    fixedWidth: 793,
                    gutter: 20,
                },
                681: {
                    edgePadding: 40,
                    fixedWidth: 620,
                    gutter: 16,
                },
                493: {
                    edgePadding: 20,
                    fixedWidth: 470,
                    gutter: 10,
                },
                0: {
                    edgePadding: 20,
                    fixedWidth: 300,
                    gutter: 10,
                }
            }
        });
    }

    sliderNextButton?.addEventListener("mouseover", function() {
        blockButtons.classList.add("animation-right");
    });
      
    sliderNextButton?.addEventListener("mouseout", function() {
        blockButtons.classList.remove("animation-right");
    });

    sliderPrewButton?.addEventListener("mouseover", function() {
        blockButtons.classList.add("animation-left");
    });
      
    sliderPrewButton?.addEventListener("mouseout", function() {
        blockButtons.classList.remove("animation-left");
    });

});