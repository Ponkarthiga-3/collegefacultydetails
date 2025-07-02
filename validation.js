document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();

    // Clear previous errors
    clearErrors();

    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const gender = document.getElementById('gender').value;
    const caste = document.getElementById('caste').value;

    // Validate form
    let isValid = true;

    // Username validation
    if (username === '') {
        showError('usernameError', 'Username is required.');
        isValid = false;
    }

    // Email validation
    if (email === '') {
        showError('emailError', 'Email is required.');
        isValid = false;
    } else if (!validateEmail(email)) {
        showError('emailError', 'Invalid email format.');
        isValid = false;
    }

    // Password validation
    if (password === '') {
        showError('passwordError', 'Password is required.');
        isValid = false;
    } else if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters.');
        isValid = false;
    }

    // Confirm password validation
    if (confirmPassword === '') {
        showError('confirmPasswordError', 'Please confirm your password.');
        isValid = false;
    } else if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match.');
        isValid = false;
    }

    // Address validation
    if (address === '') {
        showError('addressError', 'Address is required.');
        isValid = false;
    }

    // Phone number validation
    if (phone === '') {
        showError('phoneError', 'Phone number is required.');
        isValid = false;
    } else if (!validatePhone(phone)) {
        showError('phoneError', 'Invalid phone number format.');
        isValid = false;
    }

    // Gender validation
    if (gender === '') {
        showError('genderError', 'Gender is required.');
        isValid = false;
    }

    // Caste validation
    if (caste === '') {
        showError('casteError', 'Caste is required.');
        isValid = false;
    }

    // If form is valid, navigate to another page
    if (isValid) {
        window.location.href = 'clghome.html'; // Change to your desired URL
    }
});

function clearErrors() {
    document.getElementById('usernameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
    document.getElementById('addressError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('genderError').textContent = '';
    document.getElementById('casteError').textContent = '';
}

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    const re = /^[0-9]{10}$/; // Example regex for a 10-digit phone number
    return re.test(String(phone));
}
function clearForm() {
    document.getElementById('registrationForm').reset();
    clearErrors();
}
