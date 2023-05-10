document.addEventListener('DOMContentLoaded', () => {

    const themeSwitcher = document.querySelector('#switcher-theme');
    const themeDarkBtn = document.querySelector('#switch-theme-dark');
    const themeLightBtn = document.querySelector('#switch-theme-light');
    
    const handleThemeSwitch = () => {
        const isDarkTheme = !themeSwitcher.checked;
        document.body.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
        localStorage.setItem('isDarkTheme', isDarkTheme);
    };
    
    themeDarkBtn.addEventListener('click', () => {
        themeSwitcher.checked = false;
        handleThemeSwitch();
    });
    
    themeLightBtn.addEventListener('click', () => {
        themeSwitcher.checked = true;
        handleThemeSwitch();
    });
    
    const savedTheme = localStorage.getItem('isDarkTheme');
    if (savedTheme !== null) {
        themeSwitcher.checked = savedTheme !== 'true';
        handleThemeSwitch();
    } else {
        document.body.setAttribute('data-theme', 'dark');
    }

});