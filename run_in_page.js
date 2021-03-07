// This script will run inside the webpage.

// Get all the text of the webpage. not doing anything with it yet but can use it directly for sentiment analysis
let myDocumentText = document.documentElement.innerText;

//TODO: call sentiment analysis api here with myDocumentText(string data type) as a param
// response format: documentSentiment: {magnitude: 37.2, score: 0.1}
const GCLOUD_API_KEY = 'AIzaSyBdwRwYzXPzxGwU277pCFW2noaEoIFXOts';

const gCloudSentimentURL = `https://language.googleapis.com/v1beta2/documents:analyzeSentiment?key=${GCLOUD_API_KEY}`;

const body = {
  document: {
    type: 'PLAIN_TEXT',
    language: 'EN',
    content: myDocumentText,
  },
  encodingType: 'UTF8',
};

fetch(gCloudSentimentURL, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(body),
})
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    sendScoreToExtension(response.documentSentiment.score);
  });

function sendScoreToExtension(scoreToSend) {
  // Send a message back to the extension, with the parameter
  // 'pageText' set to the entire webpage text
  chrome.runtime.sendMessage({score: scoreToSend}, function(response) {
    console.log(response);
  });
}

