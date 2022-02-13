// inspired by: https://medium.com/swlh/step-by-step-building-your-first-node-js-project-45489f15aaa1
const express = require("express")
const app = express()

const Account = require("./twilioAccountInfo.json")

const client = require('twilio')(Account.accountSid, Account.authToken, {
    lazyLoading: true,
});

app.get("/", function(request,response){
response.send(`<div>Message sent successfully!</div>`    
)
})

app.post("/sendSMS", (req, res) => {
    console.log("request for SMS");
    let user = req.body;
    sendSMS(user, info => {
      console.log(`The SMS has been send 😃 and the id is ${info.messageId}`);
      res.send(info);
    });
  });

app.listen(3001, 'localhost', function () {
    console.log("Started application on port %d", 3001)
});

function sendSMS(){
    client.messages
  .create({
    body: 'A woman requires your assistance.',
    to: '+14388242772', // Text this number
    from: '+18126338917', // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
}