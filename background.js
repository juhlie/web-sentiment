'use strict';

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#1F76E9'}, function() {
        console.log('The color is blue.');
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'developer.chrome.com'},
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});

const script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);