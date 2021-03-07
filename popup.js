'use strict';

let changeColor = document.getElementById('changeColor');
console.log(changeColor)

chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color; 
    changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
    let color = element.target.value;
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.executeScript(
                tabs[0].id,
                {code: 'document.body.style.backgroundColor = "' + color + '";'});
        });
};

let sendRequest = document.getElementById('send-request');

sendRequest.addEventListener('click', apiCall);

const url = `https://language.googleapis.com/v1beta2/documents:analyzeSentiment?key=${YOUR_API_KEY}`;
const someJson = {
    "document":{
      "type":"PLAIN_TEXT",
      "language": "EN",
      "content":"The supposed honeymoon period of a new president would typically provide a moment for lawmakers to come together, particularly as the nation enters its second year of a crushing health and economic crisis. Instead, the tense showdown over the stimulus legislation showed that lawmakers were pulling apart, and poised for more ugly clashes ahead."
    },
    "encodingType":"UTF8"
  };

  async function apiCall(url = '', data = {}) {
      const response = await fetch(url, {
          method: 'POST',
          mode: 'cors',
          credentials: 'omit',
          headers: {'Content-Type': 'application/json'},
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
          body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data => {
          console.log('Success:', data);
      })
      .catch((error) => {
          console.error('Error:', error);
      });
    
  };
