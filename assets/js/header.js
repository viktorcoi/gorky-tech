document.addEventListener('DOMContentLoaded', ()  => {

    const header = document.querySelector('header')
    const languageSelector = document.querySelector('#language-selector');

    const listHeaderDrops = ['open-search', 'open-menu'];

    const openDropHeader = (className) => {
        listHeaderDrops.forEach(item => {
            if (!header.classList.contains(className))
            header.classList.remove(item)
        })
        header.classList.toggle(className)
        header.classList.contains(className) ?
        document.querySelector('body').classList.add('block-scroll') :
        document.querySelector('body').classList.remove('block-scroll');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    document.querySelector('#btn-open-menu').addEventListener('click', () => {
        openDropHeader('open-menu');
    })

    document.querySelector('#header-btn-search').addEventListener('click', () => {
        openDropHeader('open-search');
    })

    document.querySelector('#header-search-close').addEventListener('click', () => {
        document.querySelector('body').classList.remove('block-scroll');
        header.classList.remove('open-search')
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
        const headerOverlay = e.target.closest('#header-overlay');
        if (!selectorLanguage)
        languageSelector.classList.remove('open-language');
        if (headerOverlay) {
            document.querySelector('body').classList.remove('block-scroll');
            header.classList.remove('open-menu')
        }
    })

    document.addEventListener('mousedown', (e) => {
        const headerOverlay = e.target.closest('#header-overlay');
        if (headerOverlay) {
            document.querySelector('body').classList.remove('block-scroll');
            header.classList.remove('open-search')
        }
    })
});