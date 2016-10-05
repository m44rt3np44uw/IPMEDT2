var som = [];

function drag(e)
{
    // Sla het id op in drag.
    e.dataTransfer.setData('drag', e.target.id);
}

function allow_drop(e)
{
    e.preventDefault();
}

function berekening()
{
    var result = eval(som.join(" "));

    result = (''+result).split('');

    // som.push('=');
    // som.push(result);
    // document.getElementById('som').innerHTML = som.join(" ");

    var html = '';
    result.forEach(function(number, index, array) {
        html = html + '<div class="number_circle">' + number + '</div>';
    });

    document.getElementById('som').innerHTML = html;

}

function drop(e)
{
    e.preventDefault();

    // Haal het id op.
    var data = e.dataTransfer.getData('drag');

    if (som.length < 3)
    {
        if(som.length == 1 && !isNaN(data)) { return; }

        document.getElementById('som').appendChild(document.getElementById(data));

        som.push(data);

        if(som.length == 3) {
            berekening();
        }
    }
}