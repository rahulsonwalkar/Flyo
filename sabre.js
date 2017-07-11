var SabreDevStudioFlight = require('sabre-dev-studio/lib/sabre-dev-studio-flight');
const alexa = require('alexa-sdk');
const APP_ID = undefined;
var fs = require('fs');
var readline = require('readline');
var obj;
var occasion = 'christmas';
var dateS;
var dateE;
var dec = [];
//var christ = [];
var min = 0;
var max = 2000;

var sabre_dev_studio_flight = new SabreDevStudioFlight({
  client_id:     'V1:qib7l22jyp4eds6k:DEVCENTER:EXT',
  client_secret: 'ncLH0F4j',
  uri:           'https://api.test.sabre.com',
  path:         '/v2/shop/flights/fares',
  access_token: 'T1RLAQKOGOJwAjaMNYVuQ9U+u5mJVCipJRCqCqRS0YNX2f4POgTPSESbAACgQxOdiVcSTMhYsO9SZsiJ9RFZ7GgigFDvOxsVU+QLkp86A38g3r+GjmmQNB3AIMFVFDFT9BzwU+w/rEnmTX6PG3E10jx3AQDkvQIoggJp4pnAbEdDCGA4ujp74JSbxoYLeZtxveJUYIu7UCWwsc7GYcbKGdw9JcI6nKU8d1JZqDXRBWBNApay7yPJN5UgPWzxg8EQ5eBBR8cnoiroP+eaxQ**'
});

options = {
  origin       : 'DFW',
  destination  : 'LAS',
  lengthofstay : 5
};

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout,
   terminal: false
});

var callback = function(error, data) {
  if (error) {
    // Your error handling here
    console.log(error);
    //console.log("Ysssssssss");
  }
  else {
    // Your success handling
    fs.writeFile('mynewfile3.json', data, function (err) {
      if (err) throw err;
      //console.log('Saved!');
      fs.readFile('mynewfile3.json', 'utf8', function (err, data) {

        if (err)
          throw err;
        obj = JSON.parse(data);
        //console.log('parsed!');

        var j = 0;
        if(occasion == 'christmas'){
          for (var i = 0; i < obj.FareInfo.length; i++) {
            if(obj.FareInfo[i].DepartureDateTime.substring(0,7) == "2017-12"){
              dec[j] = obj.FareInfo[i];
                //console.log(dec[j].DepartureDateTime);
              j++;
            }
          }

          for (var i = 0; i < dec.length; i++) {
            if(dec[i].DepartureDateTime.substring(8, 10) == 21){
              if(dec[i].LowestFare < max){
                  min = i;
              }
            }
            if(dec[i].DepartureDateTime.substring(8,10) == 22){
              if(dec[i].LowestFare < dec[min].LowestFare){
                min = i;
              }
            }
            if(dec[i].DepartureDateTime.substring(8,10) == 23){
              if(dec[i].LowestFare < dec[min].LowestFare){
                min = i;
              }
            }
            if(dec[i].DepartureDateTime.substring(8,10) == 24){
              if(dec[i].LowestFare < dec[min].LowestFare){
                min = i;
              }
            }
          }
          console.log(dec[min]);
        }
        else {
          for (var i = 0; i < obj.FareInfo.length; i++) {
            if(obj.FareInfo[i].LowestFare < max){
              if(obj.FareInfo[i].LowestFare < obj.FareInfo[min].LowestFare)
                min = i;
            }
          }
          console.log(obj.FareInfo[min]);
        }
      });
    });
  }
}

sabre_dev_studio_flight.lead_price_calendar(options, callback);
