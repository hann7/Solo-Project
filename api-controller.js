const apiURL = 'https://www.alphavantage.co/query?'; 
const apikey = require('./apikey');
const alpha = require('alphavantage')({ key: apikey });
const request = require('request-promise-native');
//concat apiURL + 'function=TIME_SERIES_DAILY&symbol=(user inputted symbol)&interval=60min&apikey=(key)'

const apiController = {};

apiController.landing = (req, res, next) => {
  //fetch data from favorited tickers from api and send back to client to fill up the react component homepage
  console.log('Landing page is loading...');
  return next();
}

apiController.search = (req, res, next) => {
  console.log('I am searching!');
  const symbol = req.params.id; console.log('symbol is ' + symbol);
  const url = apiURL.concat(`function=TIME_SERIES_DAILY&symbol=${symbol}&interval=60min&apikey=${apikey}`);
  const options = {headers: {'User-Agent': 'request'}}
  request(url, options)
    .then(data => {
      res.locals.data = data;
      return next();
    })
    .catch(err => {
      return next('Error:', err);
    });
}

module.exports = apiController;