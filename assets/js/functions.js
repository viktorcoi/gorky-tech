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

export { fillInput };