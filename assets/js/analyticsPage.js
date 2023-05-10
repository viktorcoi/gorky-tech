import { paginationTags } from './paginationTags.js';

document.addEventListener('DOMContentLoaded', ()  => {

    const clearInputs = (popup) => {
        popup.querySelectorAll('input').forEach(input => {
            input.value = '';
        })
        popup.querySelectorAll('textarea').forEach(input => {
            input.value = '';
        })
    }
    
    document.querySelector('#analysts-question').addEventListener('click', () => {
        document.querySelector('#analytics-page-popups').classList.add('popup-ask-question');
        document.querySelector('body').classList.add('block-scroll');
    })

    document.querySelector('#order-certificate').addEventListener('click', () => {
        document.querySelector('#analytics-page-popups').classList.add('popup-ask-question');
        document.querySelector('body').classList.add('block-scroll');
    })

    document.querySelector('#ask-question-close').addEventListener('click', () => {
        document.querySelector('#analytics-page-popups').classList.remove('popup-ask-question');
        setTimeout(() => {
            clearInputs(document.querySelector('#popup-ask-question'));
            document.querySelector('body').classList.remove('block-scroll');
        }, 300);
    })

    document.querySelector('#analytics-page-popups').addEventListener('mousedown', (e) => {
        if (!e.target.closest('.popup')) {
            document.querySelector('#analytics-page-popups').classList.remove('popup-ask-question');
            setTimeout(() => {
                clearInputs(document.querySelector('#popup-ask-question'));
                document.querySelector('body').classList.remove('block-scroll');
            }, 300);
        }
    })

    paginationTags('#analytics-tags', '#analytics-tags-page-prew', '#analytics-tags-page-next', '#search-analytics-tags');

});