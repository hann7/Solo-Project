const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const apiController = require('./api-controller')


//will need routes for landing page and page for search result
app.get('/api/search', apiController.search, (req, res) => {
  console.log('Search works!');
  return res.send('Search works!'); //maybe have a second react page to redirect to
});

app.get('/api/homepage', apiController.landing, (req, res) => {
  console.log('homepage');
  return res.send('homepage!'); //get request from front end to populate landing page data
});


//listening on port 3000
app.listen(port, () => {
  console.log(`Hannah's app listening on port ${port}`)
})

// app.get('/api', (req, res) => {
//   return res.sendFile(path.resolve(__dirname, 'index.html'));
// });
// app.get('/styles.css', (req, res) => {
//   return res.sendFile(path.resolve(__dirname, 'styles.css'));
// });