document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const passwordSetupForm = document.getElementById('passwordSetupForm');
    const switchToSignUp = document.getElementById('switchToSignUp');
    const switchToSignIn = document.getElementById('switchToSignIn');
    
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    const passwordSetup = document.getElementById('passwordSetup');

    // User database simulation
    const users = {
        // username: { password: 'password', needsPasswordReset: true }
    };

    // Switch to Sign Up form
    switchToSignUp.addEventListener('click', () => {
        signInForm.style.display = 'none';
        signUpForm.style.display = 'block';
    });

    // Switch to Sign In form
    switchToSignIn.addEventListener('click', () => {
        signUpForm.style.display = 'none';
        signInForm.style.display = 'block';
    });

    // Handle Sign Up
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('reg-username').value;
        const password = document.getElementById('reg-password').value;

        if (!users[username]) {
            users[username] = { password, needsPasswordReset: true };
            alert('Registration successful! Please Sign In.');
            signUpForm.style.display = 'none';
            signInForm.style.display = 'block';
        } else {
            document.getElementById('registerError').style.display = 'block';
            document.getElementById('registerError').textContent = 'Username already exists!';
        }
    });

    // Handle Sign In
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        if (users[username] && users[username].password === password) {
            if (users[username].needsPasswordReset) {
                signInForm.style.display = 'none';
                passwordSetupForm.style.display = 'block';
                sessionStorage.setItem('currentUser', username);
            } else {
                alert('Login successful!');
            }
        } else {
            document.getElementById('loginError').style.display = 'block';
            document.getElementById('loginError').textContent = 'Invalid username or password!';
        }
    });

    // Handle First-Time Password Setup
    passwordSetup.addEventListener('submit', function(event) {
        event.preventDefault();
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const currentUser = sessionStorage.getItem('currentUser');

        if (newPassword === confirmPassword && currentUser) {
            users[currentUser].password = newPassword;
            users[currentUser].needsPasswordReset = false;
            alert('Password set successfully! Please log in again.');
            passwordSetupForm.style.display = 'none';
            signInForm.style.display = 'block';
        } else {
            document.getElementById('passwordSetupError').style.display = 'block';
            document.getElementById('passwordSetupError').textContent = 'Passwords do not match!';
        }
    });
});
