document.addEventListener('DOMContentLoaded', ()  => {

    const header = document.querySelector('header')
    const languageSelector = document.querySelector('#language-selector');

    document.querySelector('#btn-open-menu').addEventListener('click', () => {
        header.classList.toggle('open-menu')
    })

    document.querySelector('#switch-theme-dark').addEventListener('click', () => {
        document.querySelector('#switcher-theme').checked = false;
        document.querySelector('body').setAttribute('data-theme', 'dark');
    })

    document.querySelector('#switch-theme-light').addEventListener('click', () => {
        document.querySelector('#switcher-theme').checked = true;
        document.querySelector('body').setAttribute('data-theme', 'light');
    })

    languageSelector.querySelector('#language-selector-head').addEventListener('click', function() {
        languageSelector.classList.toggle('open-language');
    })

    languageSelector.querySelector('#language-options').querySelectorAll('p').forEach((item) => {
        item.addEventListener('click', function() {
            languageSelector.classList.remove('open-language');
            languageSelector.querySelector('#language-selector-head').querySelector('p').textContent = this.textContent;
        })
    }) 

    document.addEventListener('click', (e) => {
        const selectorLanguage = e.target.closest('#language-selector');
        if (!selectorLanguage)
        languageSelector.classList.remove('open-language');
    })
});