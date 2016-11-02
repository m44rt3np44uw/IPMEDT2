if test -e s1094220.zip; then
    rm s1094220.zip
    echo "De oude zip is verwijderd!"
fi

if zip -r -q s1094220.zip .; then
    echo "Het zippen is gelukt!"
fi