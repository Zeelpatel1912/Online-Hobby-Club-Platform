const form = document.getElementById('registrationForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const successMessage = document.getElementById('successMessage');

    let valid = true;

    // Reset errors
    nameError.textContent = '';
    emailError.textContent = '';
    successMessage.textContent = '';

    // Name validation
    if (name === '') {
        nameError.textContent = 'Name is required.';
        valid = false;
    } else if (name.length < 3) {
        nameError.textContent = 'Name must be at least 3 characters long.';
        valid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        emailError.textContent = 'Email is required.';
        valid = false;
    } else if (!emailRegex.test(email)) {
        emailError.textContent = 'Enter a valid email address.';
        valid = false;
    }

    if (valid) {
        successMessage.textContent = 'Registration successful!';
        form.reset();
    }
});