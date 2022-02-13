const express = require("express");
const Account = require("./twilioAccountInfo.json");
const app = express();
const portNumber = 5000;

app.listen(portNumber, () => {
  console.log("Server listen on port " + portNumber);
});

const client = require("twilio")(Account.accountSid, Account.authToken, {
  lazyLoading: true,
});

function sendSMS() {
  client.messages
    .create({
      body: "A woman requires your assistance.",
      to: "+14388242772", // Text this number
      from: "+18126338917", // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
}

app.post("/sendSMS", (req, res) => {
  console.log("request for SMS");
  let user = req.body;
  sendSMS(user, (info) => {
    console.log(`The SMS has been send 😃 and the id is ${info.messageId}`);
    res.send(info);
  });
});

app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});
