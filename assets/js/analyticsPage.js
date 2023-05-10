import { paginationTags } from './paginationTags.js';
import { fillInput } from './functions.js';

document.addEventListener('DOMContentLoaded', ()  => {

    const clearInputs = (popup) => {
        const validFills = ['input, textarea'];
        validFills.forEach(el => {
            popup.querySelectorAll(el).forEach(input => {
                input.value = '';
                input.classList.remove('error-input');
                input.nextElementSibling.style.display = 'none';
                input.nextElementSibling.classList.remove('animate__animated', 'animate__fadeIn');
            })
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
            phoneMask.destroy();
        }, 300);
    })

    document.querySelector('#analytics-page-popups').addEventListener('mousedown', (e) => {
        if (!e.target.closest('.popup')) {
            document.querySelector('#analytics-page-popups').classList.remove('popup-ask-question');
            setTimeout(() => {
                clearInputs(document.querySelector('#popup-ask-question'));
                document.querySelector('body').classList.remove('block-scroll');
                phoneMask.destroy();
            }, 300);
        }
    })

    const inputName = document.querySelector('#ask-question-name');
    const inputPhone = document.querySelector('#ask-question-phone');
    const inputCompany = document.querySelector('#ask-question-company');
    const inputQuest = document.querySelector('#ask-question-quest');

    inputName.addEventListener('input', function() {
        fillInput(this);
    })

    inputCompany.addEventListener('input', function() {
        fillInput(this);
    })

    inputQuest.addEventListener('input', function() {
        fillInput(this);
    })

    inputPhone.addEventListener('input', function() {
        fillInput(this);
        if (this.value.length < 4)
        this.value = "+7 (";
        if (this.value.length < 18) {
            this.classList.add('error-input');
            this.nextElementSibling.style.display = 'block';
            this.nextElementSibling.classList.add('animate__animated', 'animate__fadeIn');
        }
    })

    let maskOptions = {
        mask: '+{7} (000) 000-00-00'
    };

    let phoneMask;
    
    inputPhone.addEventListener('focus', function() {
        if (this.value === '') {
            phoneMask = IMask(inputPhone, maskOptions);
            this.value = '';
            this.value = "+7 (";
        }
     
        setTimeout(() => {
            this.setSelectionRange(this.value.length, this.value.length);
        }, 100);
        if (this.value.length === 18) {
            this.classList.remove('error-input');
            this.nextElementSibling.style.display = 'none';
            this.nextElementSibling.classList.remove('animate__animated', 'animate__fadeIn');
        }
    })

    inputPhone.addEventListener('blur', function() {
        if (this.value === '+7 (')
        this.value= "";
    })

    document.querySelector('#send-ask-question').addEventListener('click', function(e) {
        let errors = 0;
        const validFills = ['input, textarea']
        validFills.forEach(el => {
            this.closest('form').querySelectorAll(el).forEach(item => {
                fillInput(item);
                if (item.classList.contains('error-input'))
                errors++;
                if (errors > 0) 
                e.preventDefault();
            })
        })
        if (inputPhone.value.length < 18) {
            inputPhone.classList.add('error-input');
            inputPhone.nextElementSibling.style.display = 'block';
            inputPhone.nextElementSibling.classList.add('animate__animated', 'animate__fadeIn');
        }
    })

    paginationTags('#analytics-tags', '#analytics-tags-page-prew', '#analytics-tags-page-next', '#search-analytics-tags');

});