const express = require('express');
const postcode = express.Router();
const uk = require('../models/united-kingdom');
const {postcodeValidator, postcodeValidatorExistsForCountry} = require('postcode-validator');

/*
* Set up routes.
*/

postcode.get('/postcode/:country/:postcode', function (req, res) {
  const country = req.params.country.toUpperCase();
  const code = req.params.postcode.toUpperCase();
  if(postcodeValidatorExistsForCountry(country)) {
    if(postcodeValidator(code, country)) {
      if(uk.test(code)) {
        res.send({
          status: 'Ok: Supported postcode for ' + country
        });
      } else {
        res.send({
          status: 'Error: Usupported postcode for ' + country
        });
      }
    } else {
      res.send({
        status: 'Error: Invalid postcode for ' + country
      });
    }
  } else {
    res.send({
      status: 'Error: Invalid country code of ' + country
    });
  }
});

postcode.get('/postcode/:postcode', function (req, res) {
  const code = req.params.postcode.toUpperCase();
  if(postcodeValidator(code, 'UK')) {
    if(uk.test(code)) {
      res.send({
        status: 'Ok: Supported postcode for UK'
      });
    } else {
      res.send({
        status: 'Error: Usupported postcode for UK'
      });
    }
  } else {
    res.send({
      status: 'Error: Invalid postcode for UK'
    });
  }
});

module.exports = postcode;