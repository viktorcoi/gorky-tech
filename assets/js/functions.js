const fillInput = (input) => {
    if (input.value.trim().length < 1) {
        input.classList.add('error-input');
        input.nextElementSibling.style.display = 'block';
        input.nextElementSibling.classList.add('animate__animated', 'animate__fadeIn');
    } else {
        input.classList.remove('error-input');
        input.nextElementSibling.style.display = 'none';
        input.nextElementSibling.classList.remove('animate__animated', 'animate__fadeIn');   
    }
}

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

const closePopup = (popup, overlay, param, mask) => {
    if (param) {
        if (param.split('-')[0] === 'inputs') {
            document.querySelector(overlay).classList.remove(popup);
            setTimeout(() => {
                clearInputs(document.querySelector(`#${popup}`));
                document.querySelector('body').classList.remove('block-scroll');
                document.querySelector(`#${popup}`).style.display = 'none';
                if (param === 'inputs-mask') {
                    if (mask) {
                        mask.updateValue(); 
                    }
                }
            }, 300);
        }
    } else {
        document.querySelector(overlay).classList.remove(popup);
        setTimeout(() => {
            document.querySelector('body').classList.remove('block-scroll');
            document.querySelector(`#${popup}`).style.display = 'none';
        }, 300);
    }
}

const openPopup = (popup, overlay) => {
    document.querySelector(`#${popup}`).style.display = 'block';
    setTimeout(() => {
        document.querySelector(overlay).classList.add(popup);
        document.querySelector('body').classList.add('block-scroll');
    }, 1)
}

const checkFieldErrors = (e, button, param, phone) => {
    let errors = 0;
    const validFills = ['input, textarea'];
    validFills.forEach(el => {
        button.closest('form').querySelectorAll(el).forEach(item => {
            fillInput(item);
            if (item.classList.contains('error-input'))
            errors++;
        })
    })
    if (param === 'phone') {
        if (phone.value.length < 18) {
            phone.classList.add('error-input');
            phone.nextElementSibling.style.display = 'block';
            phone.nextElementSibling.classList.add('animate__animated', 'animate__fadeIn');
            errors++;
        }
    }
    if (errors > 0) 
    e.preventDefault();
}

const focusPhoneInput = (el, mask) => {
    if (el.value === '') {
        el.value = '';
        el.value = "+7 (";
    }
    setTimeout(() => {
        el.setSelectionRange(el.value.length, el.value.length);
    }, 100);
    if (el.value.length === 18) {
        el.classList.remove('error-input');
        el.nextElementSibling.style.display = 'none';
        el.nextElementSibling.classList.remove('animate__animated', 'animate__fadeIn');
    }
    mask.updateValue(); 
}

const blurPhoneInput = (el, mask) => {
    if (el.value === '+7 (')
    el.value= "";
    mask.updateValue();
}

const changePhoneInput = (el, mask) => {
    fillInput(el);
    if (el.value.length < 4)
    el.value = "+7 (";
    if (el.value.length < 18) {
        el.classList.add('error-input');
        el.nextElementSibling.style.display = 'block';
        el.nextElementSibling.classList.add('animate__animated', 'animate__fadeIn');
    }
    mask.updateValue();
}

export { fillInput, openPopup, clearInputs, closePopup, checkFieldErrors, focusPhoneInput, changePhoneInput, blurPhoneInput };