const form = document.querySelector('#form');
const Email = document.querySelector('#Email');
const password = document.querySelector('#password');

form.addEventListener('submit', (e) => {
    if (!validateInputs()) {
        e.preventDefault();
    }
});

function validateInputs() {
    const emailVal = Email.value.trim();
    const passwordVal = password.value.trim();
    let success = true;
    
    if (emailVal === '') {
        success = false;
        setError(Email, 'Email ID is Required');
    } else if (!validateEmail(emailVal)) {
        success = false;
        setError(Email, 'Please Enter Valid Email ID');
    } else {
        setSuccess(Email);
    }

    if (passwordVal === '') {
        success = false;
        setError(password, 'Password is Required');
    } else if (passwordVal.length < 8) {
        success = false;
        setError(password, 'Password should have at least 8 characters');
    } else if (!/[A-Z]/.test(passwordVal)) {
        success = false;
        setError(password, 'Password must contain at least one uppercase letter');
    } else if (!/[!@#$%^&*]/.test(passwordVal)) {
        success = false;
        setError(password, 'Password must contain at least one special character');
    } else if (!/\d/.test(passwordVal)) {
        success = false;
        setError(password, 'Password must contain at least one number');
    } else {
        setSuccess(password);
    }

    return success;
}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.Error');
    errorElement.innerText = message;
    inputGroup.classList.add('Error');
    inputGroup.classList.remove('Success');
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.Error');
    errorElement.innerText = '';
    inputGroup.classList.add('Success');
    inputGroup.classList.remove('Error');
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
