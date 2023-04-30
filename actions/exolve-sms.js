const core = require('@actions/core');
var axios = require('axios');


const RECEIVER = core.getInput('receiver')
const EXOLVE_TOKEN = core.getInput('exolve-token')


console.log('Hello, I am an action!'+RECEIVER+ 'ET = ' + EXOLVE_TOKEN)




var data = JSON.stringify({
  "number": "79667386516",
  "destination": "79651977888",
  "text": "Test message"
});

var config = {
  method: 'post',
  url: 'https://api.exolve.ru/messaging/v1/SendSMS',
  headers: { 
    'Authorization': `Bearer ${EXOLVE_TOKEN}`, 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
