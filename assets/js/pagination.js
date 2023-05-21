document.addEventListener('DOMContentLoaded', () => {
    const listNumbers = document.querySelector('#paginagion-list');
    if (listNumbers) {

        let countNumbers = 10;
        let renderListNumbers;
    
        const resetPagination = () => {
            listNumbers.innerHTML = '';
        };
    
        const createElement = (indicator, number, className, text) => {
            const numberPage = document.createElement('div');
            numberPage.setAttribute('data-page', text !== '...' ? number : 'dots');
            numberPage.setAttribute('class', className);
            numberPage.innerHTML = `<p>${text}</p>`;
            if (indicator === 'render') {
                if (number === 1) {
                    numberPage.classList.add('select-page');
                }
            }
            listNumbers.appendChild(numberPage);
        };
    
        const updatePagination = (idPage) => {
            if (countNumbers > 6) {
                let i = 1;
                if (idPage < 4) {
                    resetPagination();
                    for (i; i <= countNumbers; i++) {
                        if (i < 5) {
                            createElement('update', i, 'paginagion__page', i);
                        } else if (i === 5) {
                            createElement('update', i, 'paginagion__dots', '...');
                        } else if (i === countNumbers) {
                            createElement('update', i, 'paginagion__page', i);
                        }
                    }
                } else if (idPage > 3 && idPage < countNumbers - 2) {
                    resetPagination();
                    i = idPage - 2;
                    for (i; i <= countNumbers; i++) {
                        if (i < idPage + 2) {
                            createElement('update', i, 'paginagion__page', i);
                        } else if (i === idPage + 2) {
                            createElement('update', i, 'paginagion__dots', '...');
                        } else if (i === countNumbers) {
                            createElement('update', i, 'paginagion__page', i);
                        }
                    }
                } else if (idPage <= countNumbers) {
                    resetPagination();
                    createElement('update', 1, 'paginagion__page', 1);
                    createElement('update', 2, 'paginagion__dots', '...');
                    i = countNumbers - 3;
                    for (i; i <= countNumbers; i++) {
                        createElement('update', i, 'paginagion__page', i);
                    }
                }
            }
            return renderListNumbers = listNumbers.children;
        };
    
        const renderPagination = () => {
            let i = 1;
            resetPagination();
            if (countNumbers < 7) {
                for (i; i <= countNumbers; i++) {
                    createElement('render', i, 'paginagion__page', i);
                }
            } else if (countNumbers > 6) {
                for (i; i <= countNumbers; i++) {
                    if (i < 5) {
                        createElement('render', i, 'paginagion__page', i);
                    } else if (i === 5) {
                        createElement('render', i, 'paginagion__dots', '...');
                    } else if (i === countNumbers) {
                        createElement('render', i, 'paginagion__page', i);
                    }
                }
            }
           
            renderListNumbers = listNumbers.children;
        };
    
        document.addEventListener('click', (e) => {
            let btnPage = e.target.closest('.paginagion__page');
            if (btnPage) {
                const idPage = btnPage.getAttribute('data-page');
                Array.from(renderListNumbers).forEach((item) => {
                    item.classList.remove('select-page');
                    if (item.getAttribute('data-page') == idPage) {
                        item.classList.add('select-page');
                    }
                });

                renderListNumbers = updatePagination(parseInt(idPage, 10));
                Array.from(renderListNumbers).forEach((item) => {
                    if (item.getAttribute('data-page') == idPage) {
                        item.classList.add('select-page');
                    }
                });
            }
        });
    
        renderPagination();

    }
});
