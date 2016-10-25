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

}( jQuery ));