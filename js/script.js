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

    // TOGGLE SIDEBAR MENU
    $('.menu-collaps-btn').click(function () {
        const $this = $(this);
      
        if (!$this.hasClass('hide-menu-text')) {
          $this.addClass('hide-menu-text');
        } else {
          setTimeout(function () {
            $this.removeClass('hide-menu-text');
          }, 300);
        }

        $('.sidebar-menu a span').toggleClass('hide-menu-text');
        $('.sidebar-area').toggleClass('sidebar-collapsed');
        $('.main-header').toggleClass('decrese-header-width');
    });


    //HEADER RIGHT DROP BUTTON MENY
    $('.drop-btn-wrap > button').on('click', function(event) {
        event.stopPropagation();
        const $toggleDiv = $(this).next('.drop-menu');
        $('.drop-menu').not($toggleDiv).hide();
        $toggleDiv.toggle();
    });
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.drop-menu').length) {
            $('.drop-menu').hide();
        }
    });

    // AUTO GIVE CLASS TO SIDEBAR MENU
    $('.sidebar-menu ul li.active-menu').each(function () {
        $(this).next('li').addClass('active-menu-bottom-item');
        $(this).prev('li').addClass('active-menu-top-item');
        $(this).find('a').addClass('active-page');
    });

});