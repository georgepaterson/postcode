const express = require('express');
const app = express();
const postcode = require('./controllers/postcode');
const health = require('./controllers/health');

require('dotenv').config();

/*
* Set up routes.
*/

app.get('/postcode/:country/:postcode', postcode);
app.get('/postcode/:postcode', postcode);
app.get('/health', health);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;