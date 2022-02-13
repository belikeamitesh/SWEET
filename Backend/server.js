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

app.post("/api/sendSMS", (req, res) => {
  console.log("request for SMS");
  let user = req.body;
  sendSMS(user, (info) => {
    console.log(`The SMS has been send 😃 and the id is ${info.messageId}`);
    res.send(
        {
            id: "123", //id of the new post -> coming from server
            title: '456', //title of the new post -> user has input
            body: '789', //body of the new post -> user has input
            userId: "Artour"//user id of the new post -> who input
          }
    );
  });
});

app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});
