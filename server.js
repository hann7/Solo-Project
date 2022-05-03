const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


//serve html and css files to client
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});
app.get('/styles.css', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'styles.css'));
});

//will need routes for landing page and page for search result

//listening on port 3000
app.listen(port, () => {
  console.log(`Hannah's app listening on port ${port}`)
})

