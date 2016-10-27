$(document).ready(function () {

    // Moment
    moment.locale('nl');

    // The hashtag.
    var hashtag = 'catsoftwitter';

    // Create the hashtag
    $('.hashtag').hashtag(hashtag);

    $.ajax({
        'url': '/twitter.php?hashtag=' + hashtag,
        'method': 'GET',
        'dataType': 'json',
        'success': function (data) {

            // Loop through each status.
            $.each(data.statuses, function (index, status) {

                // Make tweet
                $('.tweets').makeTweet(status);
            });

            // Make Tweet colorful.
            $('body').makeColorful($('.tweet'));
        }
    });

});