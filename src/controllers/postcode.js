const express = require('express');
const postcode = express.Router();
const {postcodeValidator} = require('postcode-validator');

/*
*
*/

postcode.get('/postcode/:country/:postcode', function (req, res) {
  const country = req.params.country.toUpperCase();
  const code = req.params.postcode.toUpperCase();
  const result = postcodeValidator(code, country);
  res.send(result)
});

postcode.get('/postcode/:postcode', function (req, res) {
  const code = req.params.postcode.toUpperCase();
  const result = postcodeValidator(code, 'GB');
  res.send(result)
});


/*
* TODO:
* Check data source for country code.
* If valid country code, check postcode against validator.
* Default to UK postcode validator.
* If valid postcode in service area, return true.
*/


module.exports = postcode;
