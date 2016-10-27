$(document).ready(function () {

    // Moment
    moment.locale('nl');

    // The hashtag.
    var hashtag = 'catsoftwitter';

    // Add the hashtag to the title.
    $('title').append(' - #' + hashtag);

    // Create the hashtag
    $('.hashtag').hashtag(hashtag);

    var $button = $('.more button');

    // Hide button for the first time.
    $button.hide();

    // Get tweets the first time.
    getTweets('max_id', 0, true);

    // Show button.
    function showButton() {

        // Check if the button is visible.
        if(!$button.is(":visible")) {

            // Show button.
            $button.show();
        }
    }

    // Load more tweets.
    $button.on('click', function () {

        // Get the oldest tweet.
        var $oldest_tweet = $('.tweet').last();

        // Get the id.
        var max_id = $oldest_tweet.attr('data-id');

        // Get new Tweets.
        getTweets('max_id', max_id, true);
    });

    // Get new tweets each 30 seconds.
    setInterval(function() {

        // Get the first tweet and the id.
        var $newest_tweet = $('.tweet').first(),
            since_id      = $newest_tweet.attr('data-id');

        // Get new tweets.
        getTweets('since_id', since_id, false);

    }, 30000);

    function getTweets(type, id, append) {

        // Data
        var data = {
            'hashtag': hashtag,
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
            }
        });
    }
});
