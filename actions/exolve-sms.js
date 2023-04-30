const core = require('@actions/core');
var axios = require('axios');


const EXOLVE_TOKEN = core.getInput('exolve-token')
const RECEIVER_PHONE = core.getInput('receiver_phone')
const SERVICE_PHONE = core.getInput('service_phone')
const TEXT = core.getInput('text')


console.log('Hello, I am an action!')



var data = JSON.stringify({
  "number": SERVICE_PHONE,
  "destination": RECEIVER_PHONE,
  "text": TEXT
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
