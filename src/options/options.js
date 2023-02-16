'use strict';

function saveOptions() {
  const userInputString = document.getElementById('libreddit-url-input').value;
  const status = document.getElementById('status');
  try {
    // Create a throwaway URL object to pass validating URLs to the URL constructor
    new URL(userInputString);
    chrome.storage.sync.set({
      tedditURL: userInputString,
    }, function() {
      status.textContent = `Default LibReddit URL updated to ${userInputString}`;
      setTimeout(function() {
        status.textContent = '';
      }, 1000);
    });
  } catch (err) {
    console.log(err);
    if (err instanceof TypeError) {
      status.textContent = `${userInputString} is not a valid URL`;
    } else {
      status.textContent = `An unexpected error occurred: ${err}`;
    }
  }
}

function restoreOptions() {
  const urlInputField = document.getElementById('libreddit-url-input');
  chrome.storage.sync.get({'libredditURL': 'https://libreddit.garudalinux.org'}, function(items) {
    urlInputField.value = items.libredditURL;
  });
}
// this literally modifies the extension's source code just to do this, but whatever
document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
