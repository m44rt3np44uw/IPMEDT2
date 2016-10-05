$(document).ready(function() {

    // Variables.
    var $lightbulb = $('#lightbulb'),
        $button    = $('#sleep_button'),
        $input     = $('#sleep_input'),
        $on        = $('#on'),
        $off       = $('#off');

    // Lamp met de hover.
    $lightbulb.hover(function() {

        // Zet de lamp aan.
        lightbulb_on();
    }, function() {

        // Zet de lamp uit.
        lightbulb_off();
    });

    // Formulier handeling
    $button.click(function() {

        // Seconden.
        var seconds = $input.val();

        // Controleer of het binnen de range is.
        if(seconds > 0 && seconds < 100) {

            // Roep de sleep methode aan.
            lightbulb_sleep(seconds);
        }
    });

    // Zet lamp aan.
    $on.click(function() {
        lightbulb_on();
    });

    // Zet lamp uit.
    $off.click(function() {
        lightbulb_off();
    });

    // Lamp aan.
    function lightbulb_on() {

        // Verander de source.
        $lightbulb.attr('src', 'assets/img/lamp-aan.png');
    }

    // Lamp uit.
    function lightbulb_off() {

        // Verander de source.
        $lightbulb.attr('src', 'assets/img/lamp-uit.png');
    }

    // Toggle lamp.
    function lightbulb_sleep(seconds) {

        // milliseconden.
        seconds = seconds * 1000;

        // Zet de lamp aan.
        lightbulb_on();

        // Wacht even.
        setTimeout(function() {

            // Zet de lamp uit.
            lightbulb_off()
        },

        // De wachttijd.
        seconds);
    }
});