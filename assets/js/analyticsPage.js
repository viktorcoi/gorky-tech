document.addEventListener('DOMContentLoaded', ()  => {

    const showGraph = (el) => {
        let rect = el.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            el.classList.add('animation-show');
        }
    }

    const arrGraphs = [
        document.querySelector('#graph-vrp'),
        document.querySelector('#graph-export-ict'),
        document.querySelector('#graph-turnover-ict'),
        document.querySelector('#graph-average-po'),
        document.querySelector('#graph-quantity-ict')
    ]

    window.addEventListener('scroll', function() {
        if (window.innerWidth > 1024) {
            arrGraphs.forEach(graph => {
                showGraph(graph);
            })
        }
    });

    arrGraphs.forEach(graph => {
        showGraph(graph);
    })

});