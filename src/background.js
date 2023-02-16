'use strict';

try {
  chrome.storage.sync.get({'libredditURL': 'https://libreddit.garudalinux.org'}, function(items) {
    // most of the code here is borrowed from stackoverflow lmfao, but it works so whatever
    chrome.webRequest.onBeforeRequest.addListener(function(details) {
      const redditURL = new URL(details.url);
      const redirectURL = `${items.libredditURL}${redditURL.pathname}${redditURL.search}`;
      console.log(`Redirecting ${redditURL} to ${redirectURL}`);
      return {redirectUrl: redirectURL};
    }, {
      urls: ['*://*.reddit.com/*'],
    }, ['blocking']);
  });
} catch (err) {
  console.log(err);
}
