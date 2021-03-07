chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(
    tab.id,
   {file: 'run_in_page.js'});  
});

// Add listener for messages from the script we inject
// and run inside the active webpage.
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");

    // Code to change icon of the extension.
    let score = request.score;
    // alert for testing if the score is being passed
    // alert('score received! it is ' + String(score));
    if (score <= -0.2) {
      // very negative
      chrome.browserAction.setIcon({path: "icons/negative_120.png"}, function() {
      alert("Are you sure want to read this right now? This page is sad. :( ")
      });
      // very positive
    } else if (score >= 0.2) {
      chrome.browserAction.setIcon({path: "icons/strong_positive_120.png"})
      alert("This is a happy page if you need a pick me up. :D ")
    }
    // super neutral
    else if ((score == 0) || (score == 0.1)) {
      chrome.browserAction.setIcon({path: "icons/neutral_120.png"})
      alert("This page is neutral. Meh. :-| ")
    }

    if (request.color) {
      sendResponse({});
    }
  }
);