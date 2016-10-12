$(document).ready(function () {

    // De variables.
    var $box    = $('#box'),
        $window = $(window),
        $body   = $('body');


    $box.hover(function () {
        $(this).toggleClass('hover');
        $body.toggleClass('background-hover');
    });

    // Centreer de box.
    function resize() {
        $box.css({
            'left': (($window.width()  - $box.width())  / 2),
            'top' : (($window.height() - $box.height()) / 2)
        });
    }

    // Resize als de pagina geladen wordt.
    resize();

    // Als de pagina geschaald word, schaal het object opnieuw.
    $(window).on('resize', function () {
        resize();
    });
});

