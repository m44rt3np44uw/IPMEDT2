// Array wordt in de code gevuld met nummers, + of -.
var som = [];

// setTimeout(function(){
//     window.location.reload(1);
// }, 1000);

// Drag functie.
function drag(e)
{
    // Sla het id op in drag.
    e.dataTransfer.setData('drag', e.target.id);
}

// Allow drop functie.
function allow_drop(e)
{
    // Prevent default.
    e.preventDefault();
}

// Berekening.
function berekening()
{
    // Resultaat berekenen.
    var result = (''+eval(som.join(" ")).toFixed(6)).split('').slice(0, 8),
        html   = '';

    console.log(result);

    // Maak de HTML elementen.
    result.forEach(function(number) {
        html = html + '<div class="number">' + number + '</div>';
    });

    // Vul het vak met nummers.
    document.getElementById('som').innerHTML = html;
}

// Drop functie.
function drop(e)
{
    // Prevent default.
    e.preventDefault();

    // Haal het id op.
    var data = e.dataTransfer.getData('drag');

    // Controleer of er geen 3 elementen al gesleept zijn.
    if (som.length < 3)
    {
        // Controleer of het 1e gesleepte element geen + of - is.
        // Controleer of het 2e gesleepte element geen nummer is.
        // Controleer of het 3e gesleepte element geen + of - is.
        if(som.length == 0 &&  isNaN(data)) { return; }
        if(som.length == 1 && !isNaN(data)) { return; }
        if(som.length == 2 &&  isNaN(data)) { return; }

        // Voeg het element toe.
        document.getElementById('som').appendChild(document.getElementById(data));

        // Voeg het getal, + of - toe aan de array.
        som.push(data);

        // Als er 3 elementen gesleept zijn wordt de berekening uitgevoegd.
        if(som.length == 3) {

            // Voer de berekening uit.
            berekening();
        }
    }
}