document.addEventListener('DOMContentLoaded', ()  => {

   document.querySelector('#switch-theme-dark').addEventListener('click', () => {
        document.querySelector('#switcher-theme').checked = false;
        document.querySelector('body').setAttribute('data-theme', 'dark');
    })

    document.querySelector('#switch-theme-light').addEventListener('click', () => {
        document.querySelector('#switcher-theme').checked = true;
        document.querySelector('body').setAttribute('data-theme', 'light');
    })

})