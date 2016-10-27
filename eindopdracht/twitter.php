<?php

// Debug.
ini_set('display_errors', true);

// Composer
require __DIR__ . '/vendor/autoload.php';

// .env
$dotenv = new Dotenv\Dotenv(__DIR__);
$dotenv->load();

// https://apps.twitter.com/app/12972619/keys
$settings = array(
    'oauth_access_token'        => getenv("OAUTH_ACCESS_TOKEN"),
    'oauth_access_token_secret' => getenv("OAUTH_ACCESS_TOKEN_SECRET"),
    'consumer_key'              => getenv("CONSUMER_KEY"),
    'consumer_secret'           => getenv("CONSUMER_SECRET")
);

// URL settings.
$getField = '?q=%23' . $_GET['hashtag'];
$url = 'https://api.twitter.com/1.1/search/tweets.json';
$requestMethod = 'GET';

// Twitter API Exchange
$twitter = new TwitterAPIExchange($settings);

// Get Tweets by hashtag.
$response = $twitter
    ->setGetfield($getField)
    ->buildOauth($url, $requestMethod)
    ->performRequest()
;

echo $response;