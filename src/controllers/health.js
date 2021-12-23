const express = require('express');

const health = express.Router();

/*
* Set up routes.
*/

/*
* Check that the server is healthy.
*/

health.get('/health', (req, res) => {
  res
    .status(200)
    .json({
      health: 'ok'
    });
});

module.exports = health;
