document.addEventListener('DOMContentLoaded', function() {
    const signUpBtn = document.querySelector('.signUp-btn');
    const emailInput = document.querySelector('.email-signup');
    const passwordInput = document.querySelector('.password-signup');
    const retypePasswordInput = document.querySelector('.retype-password');
    const emailError = document.querySelector('.email-error');
    const passwordError = document.querySelector('.password-error');
    const retypeError = document.querySelector('.retype-error');

    // Retrieve users array from localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    signUpBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Reset error messages
        emailError.innerHTML = '';
        passwordError.innerHTML = '';
        retypeError.innerHTML = '';

        // Validate email
        if (!emailInput.value) {
            emailError.innerHTML = 'Please enter your email';
            return;
        } else if (!isValidEmail(emailInput.value)) {
            emailError.innerHTML = 'Please enter a valid email address';
            return;
        }

        // Validate password
        if (!passwordInput.value) {
            passwordError.innerHTML = 'Please enter a password';
            return;
        }

        // Validate retype password
        if (!retypePasswordInput.value) {
            retypeError.innerHTML = 'Please retype your password';
            return;
        } else if (passwordInput.value !== retypePasswordInput.value) {
            retypeError.innerHTML = 'Passwords do not match';
            retypePasswordInput.value = '';
            return;
        }

        // Check if email already exists in the array
        if (users.some(user => user.email === emailInput.value)) {
            emailError.innerHTML = 'This email is already registered';
            // Clear form fields
            emailInput.value = '';
            passwordInput.value = '';
            retypePasswordInput.value = '';
            return;
        }

        // Add new user to the array
        const newUser = {
            email: emailInput.value,
            password: passwordInput.value
        };

        // Add new user to the array
        users.push(newUser);

        // Store updated users array in localStorage
        localStorage.setItem('users', JSON.stringify(users));

        // Clear form fields
        emailInput.value = '';
        passwordInput.value = '';
        retypePasswordInput.value = '';

        // Display success message
        alert('User registered successfully');
    });

    // Function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
