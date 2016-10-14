(function ( $ ) {

    // Fill the selector with the given hashtag.
    $.fn.hashtag = function (hashtag) {

        // Prefix the hashtag.
        $(this).html('#' + hashtag);

        // Return this.
        return this;
    };

}( jQuery ));