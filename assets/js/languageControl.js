document.addEventListener('DOMContentLoaded', ()  => {
    
    console.log('lc');
    const languageSelector = document.querySelector('#language-selector');
    
    function getCookie(name) {
        let matches = document.cookie.match(new RegExp( "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)" ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    
    languageSelector.querySelector('#language-options').querySelectorAll('p').forEach((item) => {
        item.addEventListener('click', function() {
            if ( this.getAttribute('data-lang') != getCookie('site_language')) {
                document.cookie = 'site_language = ' + this.getAttribute('data-lang');
                location.replace( this.getAttribute('data-relatedlang') );
                return false;    
            } 
            languageSelector.classList.remove('open-language');
            languageSelector.querySelector('#language-selector-head').querySelector('p').textContent = this.textContent;
        })
    }) 
    
});