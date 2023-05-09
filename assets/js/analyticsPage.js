import { paginationTags } from './paginationTags.js';

document.addEventListener('DOMContentLoaded', ()  => {

    paginationTags('#analytics-tags', '#analytics-tags-page-prew', '#analytics-tags-page-next', '#search-analytics-tags');
    


    document.querySelector('#analysts-question').addEventListener('click', () => {
        document.querySelector('#analytics-page-popups').classList.add('popup-ask-question')
    })

});