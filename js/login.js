// 25-3 Add event listener navigate to another page


document.getElementById('login-submit').addEventListener('click', function () {
    /* Get user Email */
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    emailField.value = '';

    /* Get user password */
    const passwordFiend = document.getElementById('user-password');
    const userPassword = passwordFiend.value;
    passwordFiend.value = '';
    /* Check Email & password. */
    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        window.location.href = 'banking.html'
    }
});
