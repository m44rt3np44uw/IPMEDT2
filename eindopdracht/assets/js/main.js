$(document).ready(function () {

    // Moment
    moment.locale('nl');

    // The hashtag.
    var hashtag = 'catsoftwitter';

    // Create the hashtag
    $('.hashtag').hashtag(hashtag);

    var $button = $('.more button');

    // Hide button for the first time.
    $button.hide();

    // Get tweets the first time.
    getTweets(0);

    // Show button.
    function showButton() {

        // Show button.
        $button.show();
    }

    // Load more tweets.
    $button.on('click', function () {

        // Get the oldest tweet.
        var $oldest_tweet = $('.tweet').last();

        // Get the id.
        var max_id = $oldest_tweet.attr('data-id');

        // Get new Tweets.
        getTweets(max_id);
    });

    function getTweets(max_id) {

        // Make a request.
        $.ajax({
            'url': '/twitter.php',
            'method': 'GET',
            'data': {'hashtag' : hashtag, 'max_id': max_id},
            'dataType': 'json',
            'success': function (data) {

                // Show button after the first tweets are loaded.
                showButton();

                // Loop through each status.
                $.each(data.statuses, function (index, status) {

                    // Make tweet
                    $('.tweets').makeTweet(status);
                });

                // Make Tweet colorful.
                $('body').makeColorful($('.tweet'));
            }
        });
    }
});
