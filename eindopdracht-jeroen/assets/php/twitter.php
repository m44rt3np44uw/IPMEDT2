<?php

// Debug.
ini_set('display_errors', true);

// Require Twitter API.
require_once('TwitterAPIExchange.php');

// https://apps.twitter.com/app/12972619/keys
$settings = array(
    'oauth_access_token'        => "oauth_access_token",
    'oauth_access_token_secret' => "oauth_access_token_secret",
    'consumer_key'              => "consumer_key",
    'consumer_secret'           => "consumer_secret"
 );

// URL settings.
$getField = '?q=%23' . $_GET['hashtag'];
$url = 'https://api.twitter.com/1.1/search/tweets.json';
$requestMethod = 'GET';

// Twitter API Exchange
$twitter = new TwitterAPIExchange($settings);

// Get Tweets by hashtag.
echo $twitter
    ->setGetfield($getField)
    ->buildOauth($url, $requestMethod)
    ->performRequest()
;