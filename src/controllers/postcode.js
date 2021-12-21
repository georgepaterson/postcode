const express = require('express');
const postcode = express.Router();
const {postcodeValidator, postcodeValidatorExistsForCountry} = require('postcode-validator');

/*
* Set up routes.
*/

postcode.get('/postcode/:country/:postcode', function (req, res) {
  const country = req.params.country.toUpperCase();
  const code = req.params.postcode.toUpperCase();
  if(postcodeValidatorExistsForCountry(country)) {
    if(postcodeValidator(code, country)) {
      res.send({
        status: 'Ok: Supported postcode for ' + country
      });
    } else {
      res.send({
        status: 'Error: Unsupported postcode for ' + country
      });
    }
  } else {
    res.send({
      status: 'Error: Unsupported country'
    });
  }
});

postcode.get('/postcode/:postcode', function (req, res) {
  const code = req.params.postcode.toUpperCase();
  if(postcodeValidator(code, 'GB')) {
    res.send({
      status: 'Ok: Supported postcode for GB'
    });
  } else {
    res.send({
      status: 'Error: Unsupported postcode for GB'
    });
  }
});

module.exports = postcode;