'use strict';

// change color functions from tutorial

// let changeColor = document.getElementById('changeColor');
// console.log(changeColor)

// chrome.storage.sync.get('color', function(data) {
//     changeColor.style.backgroundColor = data.color; 
//     changeColor.setAttribute('value', data.color);
// });

// changeColor.onclick = function(element) {
//     let color = element.target.value;
//         chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//             chrome.tabs.executeScript(
//                 tabs[0].id,
//                 {code: 'document.body.style.backgroundColor = "' + color + '";'});
//         });
// };

// our real extension starts here //

const url = "https://language.googleapis.com/v1beta2/documents:analyzeSentiment?key=YOUR_API_KEY";
const someJson = {
    "document":{
      "type":"PLAIN_TEXT",
      "language": "EN",
      "content":"The supposed honeymoon period of a new president would typically provide a moment for lawmakers to come together, particularly as the nation enters its second year of a crushing health and economic crisis. Instead, the tense showdown over the stimulus legislation showed that lawmakers were pulling apart, and poised for more ugly clashes ahead."
    },
    "encodingType":"UTF8"
  };


$(document).ready(function() {
    let analyzeBtn = document.getElementById('analyze');
})


document.addEventListener('DomContentLoaded', function(data) => {
    let analyzeBtn = document.getElementById('evt');
    analyzeBtn.addEventListener('click', eventDemo, false);
    alert('Clicked!');
});

// look at this beautiful jquery
// console.log('Extension is on!');

// $('#analyze').on('click', () => {
//     console.log('Clicked!');
// });

// this would be the useful bit. above lines were just for testing
// sendRequestBtn.on('click', (evt) => {
//     $.post(url, someJson, (res) => {
//         alert('Clicked!');
//     });
// });


// fetch attempt
// async function apiCall(url = '', data = {}) {
//     const response = await fetch(url, {
//         method: 'POST',
//         mode: 'cors',
//         credentials: 'omit',
//         headers: {'Content-Type': 'application/json'},
//         redirect: 'follow',
//         referrerPolicy: 'no-referrer',
//         body: JSON.stringify(data)
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Success:', data);
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//     });

// };
