$(document).ready(function () {

    // TOGGLE PASSWORD VISIBILITY
    $('#togglePassword').on('click', function () {
        // Toggle the type of the password field
        const passwordField = $('#password');
        const eyeIcon = $('#eyeIcon');
        const isPassword = passwordField.attr('type') === 'password';

        passwordField.attr('type', isPassword ? 'text' : 'password');
        eyeIcon.attr(
            'src',
            isPassword ? 'images/icn/eye-close.svg' : 'images/icn/eye.svg'
        );
    });


});