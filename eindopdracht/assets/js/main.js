$(document).ready(function () {

    // Moment
    moment.locale('nl');

    // The hashtags
    var hashtags = [
        'desuperfreekshow',
        'desuperfreekvonkshow',
        'superfreekshow',
        'superfreekvonkshow',
        'vonkshow',
        'superfreek',
        'freekvonk'
    ];

    // The hashtag.
    var hashtag = hashtags[0];

    // Call finished
    var call_finished = true;

    // Add the hashtag to the title.
    $('title').append(' - #' + hashtag);

    // Create the hashtag
    $('.hashtag').hashtag(hashtag);

    var $button = $('.more button'),
        $window = $(window);

    // Hide button for the first time.
    $button.hide();

    // Get tweets the first time.
    getTweets('max_id', 0, true);

    // Button click function.
    function buttonClick() {

        // Get the oldest tweet.
        var $oldest_tweet = $('.tweet').last();

        // Get the id.
        var max_id = $oldest_tweet.attr('data-id');

        // Get new Tweets.
        getTweets('max_id', max_id, true);
    }

    // Show button.
    function showButton() {

        // Check if the button is visible.
        if(!$button.is(":visible")) {

            // Show button.
            $button.show();
        }
    }

    // If button is on screen.
    $window.on('scroll', function() {

        // Check if the button is visible and the call is finished.
        if($button.visible() && call_finished) {

            // Set call finished to false.
            call_finished = false;

            // Do a button click.
            buttonClick();
        }
    });

    // Load more tweets.
    $button.on('click', function () {
        buttonClick();
    });

    // Get new tweets each 30 seconds.
    setInterval(function() {

        // Get the first tweet and the id.
        var $newest_tweet = $('.tweet').first(),
            since_id      = $newest_tweet.attr('data-id');

        // Get new tweets.
        getTweets('since_id', since_id, false);

    }, 30000);

    // Get the tweets.
    function getTweets(type, id, append) {

        // Prepare the query.
        var q = hashtags.map(function(hashtag) {
            return '#' + hashtag;
        }).join("+OR+");

        // Data
        var data = {
            'hashtag': q,
            'type': type,
            'id': id
        };

        // Make a request.
        $.ajax({
            'url': 'twitter.php',
            'method': 'GET',
            'data': data,
            'dataType': 'json',
            'success': function (data) {

                // Show button after the first tweets are loaded.
                showButton();

                // Store the statuses.
                var statuses = data.statuses;

                // Filter the tweets.
                statuses = statuses.filter(function (status) {
                    return status.id != id;
                });

                // Reverse the array if we need to prepend it.
                if(!append) {
                    statuses = statuses.reverse();
                }

                // Loop through each status.
                $.each(statuses, function (index, status) {

                    // Make tweet
                    $('.tweets').makeTweet(status, append);
                });

                // Make Tweet colorful.
                $('body').makeColorful($('.tweet'));

                // Finish the call.
                call_finished = true;
            }
        });
    }

    // http://stackoverflow.com/a/25359264/2940668
    $.urlParam = function(name){
        var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
        if (results==null){
            return null;
        }
        else{
            return results[1] || 0;
        }
    };

    var key = 'gerrie';
    var value = 'verstrooid';

    // Easter Egg
    if($.urlParam(key) != null && $.urlParam(key) == value) {

        // Comix Sans MS is echt mooi.
        $('*').css({
            'font-family': 'Comic Sans MS'
        });
    }
});
