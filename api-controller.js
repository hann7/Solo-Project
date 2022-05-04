const alpha = require('alphavantage')({ key: '5WM3L2DUA1FTQ0VT' }); //need to store key somewhere else for security
const apiURL = 'https://www.alphavantage.co/query?'; 
//concat apiURL + 'function=TIME_SERIES_DAILY&symbol=(user inputted symbol)&interval=60min&apikey=5WM3L2DUA1FTQ0VT'

const apiController = {};

apiController.landing = (req, res, next) => {
  //fetch data from favorited tickers from api and send back to client to fill up the react component homepage
  console.log('Landing page is loading...');
  return next();
}

apiController.search = (req, res, next) => {
  //fetch search item from api
  console.log('I am searching!');
  return next();
}

module.exports = apiController;


//example from api docs
// 'use strict';
// var request = require('request');

// // replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
// var url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo';

// request.get({
//     url: url,
//     json: true,
//     headers: {'User-Agent': 'request'}
//   }, (err, res, data) => {
//     if (err) {
//       console.log('Error:', err);
//     } else if (res.statusCode !== 200) {
//       console.log('Status:', res.statusCode);
//     } else {
//       // data is successfully parsed as a JSON object:
//       console.log(data);
//     }
// });