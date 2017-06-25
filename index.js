// Twilio Credentials
var accountSid = 'AC3a3f24027892dff7b5a15769f6028eb6';
var authToken = '';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

var sendText = function (flightInfo) {

  //Send text to Kota
  client.messages.create({
      to: "+14693018018",
      from: "+12144999437",
      body: flightInfo
  }, function(err, message) {
      //console.log(message.sid);
      console.log(err);
  });

  //Send text to Sandeep
  client.messages.create({
      to: "+12146099053",
      from: "+12144999437",
      body: flightInfo
  }, function(err, message) {
      //console.log(message.sid);
      console.log(err);
  });
}

sendText("How is the progress?");
