(function ( $ ) {

    // Fill the selector with the given hashtag.
    $.fn.hashtag = function (hashtag) {

        // Prefix the hashtag.
        $(this)

            // Add the inner HTML.
            .html('#' + hashtag)

            // Add some attributes.
            .attr({

                // Add a link to the hashtag on Twitter.
                'href': 'https://twitter.com/hashtag/' + hashtag + '?src=hash'
            })
        ;

        // Return this.
        return this;
    };

    // Make tweet
    $.fn.makeTweet = function (status, append) {

        // Replace urls and hashtags.
        function parse_url(status) {

            // Fill text.
            var text = status.text;

            // Make each link clickable.
            text = text.replace(/(https?:\/\/[^\s]+)/g, function (url) {

                // Return the replaced text.
                return '<a target="_blank" href="' + url + '">' + url + '</a>';
            });

            // Make each hashtag clickable.
            text = text.replace(/#([\w]{1,})/g, function (hashtag) {

                // Replace the space with the hashtag.
                var no_space = hashtag.replace("#", "");

                // Return the replaced text.
                return '<a target="_blank" href="https://twitter.com/hashtag/' + no_space + '?src=hash">' + hashtag + '</a>';
            });

            // Make each mention clickable.
            text = text.replace(/@([\w]{1,})/g, function(mention) {

                // Replace the space with the mention.
                var no_space = mention.replace("@", "");

                // Return the replaced text.
                return '<a target="_blank" href="https://twitter.com/' + no_space + '">' + mention + '</a>';
            });

            // Return transformed text.
            return text;
        }

        // Define template.
        var template = '';

        // Add the main div.
        template += '<div class="tweet" data-color="#' + status.user.profile_link_color + '" data-id="' + status.id + '">';

        // Check id there is any media.
        if(status.extended_entities != undefined) {

            // Add the tweet header div.
            template += '<div class="tweet-header">';

            // Check if the media is a photo.
            if(status.extended_entities.media[0].type == 'photo') {

                // Add the photo.
                template += '<img class="image" src="' + status.extended_entities.media[0].media_url_https + '" alt="' + status.text + '" title="' + status.text + '">';
            }

            // Check if the media is a video.
            else if(status.extended_entities.media[0].type == 'video') {

                // Get all the videos.
                var videos = status.extended_entities.media[0].video_info.variants;

                // Get only the mp4 videos.
                var filtered = videos.filter(function(video) {

                    // Check if the content type is a mp4.
                    return video.content_type == "video/mp4";
                });

                // Get 1 video only. Not multiple needed.
                var video = filtered[0].url;

                // Make the video HTML.
                template += '<video class="video" controls>';
                    template += '<source src="' + video + '" />';
                template += '</video>';
            }

            // Close the Tweet header div.
            template += '</div>';
        }

            // Make the Tweet content div.
            template += '<div class="tweet-content">';

                // Add the Tweet text div.
                template += '<p class="tweet-text">' + parse_url(status) + '</p>';

                // Make the Tweet by div.
                template += '<p class="tweet-by">' + moment(new Date(status.created_at)).format("LLL") + ' door <a href="https://www.twitter.com/' + status.user.screen_name + '" title="' + status.user.name + '" target="_blank">@' + status.user.screen_name + '</a></p>';

            // Close the div content div.
            template += '</div>';

        // Close the tweet div.
        template += '</div>';


        // Append the tweet to the page.
        if(append) {
            $(this).append($(template).hide().fadeIn(500));
        } else {
            $(this).prepend($(template).hide().fadeIn(500));
        }
    };

    // Make colorful
    $.fn.makeColorful =function ($tweets) {

        // Loop through each tweet.
        $.each($tweets, function (index, tweet) {

            // Get the color.
            var color = $(tweet).attr('data-color');

            // Apply the border color.
            $(tweet).css({
                'border-left-color': color
            });

            // Get each link within a tweet.
            var $links = $(tweet).find('a');

            // Apply the text color.
            $links.css({
                'color': color
            });

            // Find each tweet header.
            var $media = $(tweet).find('.tweet-header');

            // Apply the background color.
            $media.css({
                'background-color': color
            });
        });
    }

}( jQuery ));