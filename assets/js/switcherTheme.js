import { getCookie } from './functions.js';

const themeSwitcher = document.querySelector('#switcher-theme');
const themeDarkBtn = document.querySelector('#switch-theme-dark');
const themeLightBtn = document.querySelector('#switch-theme-light');

const handleThemeSwitch = () => {
    const isDarkTheme = !themeSwitcher.checked;
    document.body.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
    setCookie('site_theme', isDarkTheme ? 'dark' : 'light', 365);
};

themeDarkBtn.addEventListener('click', () => {
    themeSwitcher.checked = false;
    handleThemeSwitch();
});

themeLightBtn.addEventListener('click', () => {
    themeSwitcher.checked = true;
    handleThemeSwitch();
});

const savedTheme = getCookie('site_theme');
if (savedTheme !== '') {
    themeSwitcher.checked = savedTheme !== 'dark';
}
handleThemeSwitch();

const setCookie = (name, value, days) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + '=' + value + ';expires=' + expires.toUTCString() + ';path=/';
}

document.body.classList.add('no-transition');

window.addEventListener('load', () => {
    document.body.classList.remove('no-transition');
});
