const express = require('express');

const app = express();

require('dotenv').config();

/*
* Set up routes.
*/

app.get('/health', require('./controllers/health'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;