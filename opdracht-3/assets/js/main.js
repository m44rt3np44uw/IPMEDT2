$(document).ready(function () {
    vertel(1);

    $('#antwoord').delegate('a', "click", function () {
        vertel($(this).attr("data-stap"));
    });
});

function vertel(stap)
{
    var $image      = $('img'),
        $verhaal    = $('#verhaal'),
        $antwoord   = $('#antwoord'),
        verhaallijn = {
            verhaal_1: {
                vraag: 'Hallo, zou ik jou eens een verhaaltje vertellen?',
                antwoord_1: {
                    antwoord: 'Ja, leuk!',
                    stap: 2
                },
                antwoord_2: {
                    antwoord: 'Nee, laat me met rust...',
                    stap: 5
                }
            },
            verhaal_2: {
                vraag: 'Cool! er was eens...',
                antwoord_1: {
                    antwoord: 'Vertel me meeeerrrrr!',
                    stap: 3
                },
                antwoord_2: {
                    antwoord: 'Nee, nu ga je ver man...',
                    stap: 5
                }
            },
            verhaal_3: {
                vraag: 'Gewoon helemaal niets....',
                antwoord_1: {
                    antwoord: 'Was dat het?',
                    stap: 4
                },
                antwoord_2: {
                    antwoord: 'NEEEE, laat me met rust!',
                    stap: 5
                }
            },
            verhaal_4: {
                vraag: 'Ja dat was het.',
                antwoord_1: {
                    antwoord: 'Bedankt man, me dag kan niet meer stuk!',
                    stap: 5
                },
                antwoord_2: {
                    antwoord: '&^#$#^%$#$^%#&%*&%^&*^%$ laat me met rust!!!',
                    stap: 5
                }
            },
            verhaal_5: {
                vraag: 'OKE DOEI!'
            }
        },
        verhaalstuk = verhaallijn['verhaal_' + stap]
    ;

    $verhaal.html(verhaalstuk.vraag);
    $antwoord.empty();
    $image.hide();

    if(stap !=  Object.keys(verhaallijn).length) {
        $antwoord.append('<li><a href="#" data-stap="' + verhaalstuk.antwoord_1.stap + '">' + verhaalstuk.antwoord_1.antwoord + '</a></li>');
        $antwoord.append('<li><a href="#" data-stap="' + verhaalstuk.antwoord_2.stap + '">' + verhaalstuk.antwoord_2.antwoord + '</a></li>');
    } else {
        $image.show();
    }
}