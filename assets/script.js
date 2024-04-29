$(document).ready(function() {
    $(window).scroll(function() {
        $('.animated-image').each(function() {
            var imagePos = $(this).offset().top;
            var windowHeight = $(window).height();
            var topOfWindow = $(window).scrollTop();

            if (imagePos < topOfWindow + windowHeight) {
                $(this).addClass('visible');
            }
        });
    });
});