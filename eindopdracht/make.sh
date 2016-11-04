if test -e s1094220-IPMEDT2-twitter-feed.zip; then
    rm s1094220-IPMEDT2-twitter-feed.zip
    echo "De oude zip is verwijderd!"
fi

if zip -r -q s1094220-IPMEDT2-twitter-feed.zip .; then
    echo "Het zippen is gelukt!"
fi