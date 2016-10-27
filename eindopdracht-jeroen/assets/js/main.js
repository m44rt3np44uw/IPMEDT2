// When the document is loaded.
$(document).ready(function () {

    // Test! 1.. 2.. 3.. TEST!
    console.log('Eindopdracht - Jeroen');

    // Request some tweets.
    $.ajax({
        'url'      : '/assets/php/twitter.php?hashtag=freekvonk',
        'method'   : 'GET',
        'dataType' : 'json',
        'success'  : function (data) {

            // Loop through each tweet.
            $.each(data.statuses, function(index, status) {

                // Write the message to the console.
                console.log("Tweet: " + status.text);
            });
        }
    });
});