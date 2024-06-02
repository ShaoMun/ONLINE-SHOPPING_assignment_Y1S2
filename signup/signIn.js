function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

document.addEventListener('DOMContentLoaded', function() {
    // Login functionality
    const loginBtn = document.querySelector('.login-btn');
    const emailInputLogin = document.querySelector('.email-login');
    const passwordInputLogin = document.querySelector('.password-login');
    const emailError = document.querySelector('.email-error');
    const passwordError = document.querySelector('.password-error');

    loginBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission

        const emailLogin = emailInputLogin.value;
        const passwordLogin = passwordInputLogin.value;

        emailError.innerHTML = '';
        passwordError.innerHTML = '';

        // Validate email and password
        if (!emailLogin.trim()) {
            emailError.innerHTML = 'Please enter your email';
            return;
        } else if (!isValidEmail(emailInputLogin.value)) {
            emailError.innerHTML = 'Please enter a valid email address';
            return;
        }
        else if (!passwordLogin.trim()) {
            passwordError.innerHTML = 'Please enter a password';
            return;
        }

        // Retrieve users array from localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Find user by email
        const user = users.find(user => user.email === emailLogin);

        if (!user) {
            alert('User not found. Please check your email and try again.');
            emailInputLogin.value = '';
            passwordInputLogin.value = '';
            return;
        }

        // Check password
        if (user.password !== passwordLogin) {
            alert('Incorrect password. Please try again.');
            passwordInputLogin.value = '';
            return;
        }

        // Clear form fields
        emailInputLogin.value = '';
        passwordInputLogin.value = '';

        // Successful login
        alert('Login successful!');
        // You can redirect to another page or perform any other action here
    });
});
