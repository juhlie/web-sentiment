## Athena Hacks 2021

## Team #54 : Better Team
Devashni Priyadarshni, Julie Lam, Loranne Nasir

### Inspiration for Emoticontext

In our fast-paced 24-hour news cycle, emotionally charged content often gets the most clicks, views, and human attention. Our media diets are unhealthy by default, and we're left feeling drained and uninformed. We wanted to create a program that combats the modern media cycle and helps people stay mentally healthy by allowing them to be more intentional about the content they consume. 

### What it does

Emoticontext is a browser extension that uses the Google Cloud Natural Language API to analyze the sentiment of a given webpage. Emoticontext uses icons to tell you about your webpage's sentiment score and alerts you if you're reading an article that's highly negative or otherwise emotionally charged. 

### How we built it

We created a Google Chrome browser extension and made requests to the Google Cloud Natural Language API to retrieve webpage sentiment values. We added interactivity, alerts, and sentiment-based icons by writing JavaScript scripts using Chrome APIs. 

### Challenges we ran into

None of us had experience creating browser extensions and we were all unfamiliar with the Chrome APIs. Two of our team members come from a Python background and had minimal experience using JavaScript and Google Cloud. The learning curve was steep and the errors were plentiful, but we gained a lot from the experience! 

### Accomplishments that we're proud of

We were able to scrape a webpage's text data, make the API call from the extension, and render extension icon changes based on webpage sentiment. 

### What's next for emoticontext

We'd like to add features that detect fake news, abusive/offensive content, and other notes about a webpage that people should be aware of. We'd also like to expand the range of emotions detected (angry, silly, etc.), display an emotion only if the algorithm's certainty is above a given threshold, be able to parse different types of content (such as social media posts or comments sections), and make the extension more configurable with an options menu. For security purposes, we'd also want to eventually make API calls from our own back-end server.