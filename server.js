
// Twilio Credentials
var accountSid = '';
var authToken = '';
var url = require('url');
//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);
var http = require('http');

var sendText = function (flightInfo) {

var messageText = "How's the progress?";

  //Send text to Kota
  client.messages.create({
      to: "+14693018018",
      from: "+12144999437",
      body: flightInfo
  }, function(err, message) {
      console.log(err);
  });

  //Send text to Sandeep
  client.messages.create({
      to: "+12146099053",
      from: "+12144999437",
      body: flightInfo
  }, function(err, message) {
      console.log(err);
  });

  //Send text to Rahul
  client.messages.create({
      to: "+15038067016",
      from: "+12144999437",
      body: flightInfo
  }, function(err, message) {
      console.log(err);
  });
}

server = http.createServer( function(req, res) {
    if (req.method == 'GET') {
        var path = url.parse(req.url).pathname;
        console.log("GET");
        console.log(path);
        console.log("SABRE HACKATHON!!!!!!!!!!!!");
        if (path == "/1") {
          sendText("DFW to LAS, American Airlines, 23rd Dec to 28th Dec for $216.4");
        }
        else if (path == "/2") {
          sendText("Guns and Roses St. Louis concert on 27th July. Book concert tickets here: <link> , Book air tickets here: <link>, total trip for $216.4");
        }
        else if (path == "/3") {
          sendText("Cheapest 5 day trip to Denver from Dallas ");
        }
        else if (path == "/webhook") {

        }

    }
    else {
      console.log("Some issue with get requests");
    }
});

server.listen(process.env.PORT || 5000);
