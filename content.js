const YOUR_API_KEY = 'fill in here';

const gCloudSentimentURL = `https://language.googleapis.com/v1beta2/documents:analyzeSentiment?key=${YOUR_API_KEY}`;

const body = {
  document: {
    type: 'PLAIN_TEXT',
    language: 'EN',
    content:
      'The supposed honeymoon period of a new president would typically provide a moment for lawmakers to come together, particularly as the nation enters its second year of a crushing health and economic crisis. Instead, the tense showdown over the stimulus legislation showed that lawmakers were pulling apart, and poised for more ugly clashes ahead.',
  },
  encodingType: 'UTF8',
};

fetch(gCloudSentimentURL, {
  method: 'POST',
  headers: {},
  body: JSON.stringify(body),
})
  .then((response) => response.json())
  .then((response) => console.log(response));
