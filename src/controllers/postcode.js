const express = require('express');

const postcode = express.Router();
const { postcodeValidator, postcodeValidatorExistsForCountry } = require('postcode-validator');
const uk = require('../models/united-kingdom');

/*
* Set up routes.
*/

/*
* Check if a postcode is valid for the given country.
*/

postcode.get('/postcode/:country/:postcode', (req, res) => {
  const country = req.params.country.toUpperCase();
  const code = req.params.postcode.toUpperCase();
  const response = country.toLowerCase();
  // Check if the country is supported.
  if (postcodeValidatorExistsForCountry(country)) {
    // Check if the postcode is valid for the country.
    if (postcodeValidator(code, country)) {
      // UK test case for postcode using an if statement.
      // When further testing is required, this can be replaced with a switch statement.
      if (uk.test(code)) {
        res.send(200, {
          valid: true,
          description: `supported postcode for ${response} appointments`,
        });
      } else {
        res.send(422, {
          valid: false,
          description: `unsupported postcode for ${response} appointments`,
        });
      }
    } else {
      res.send(422, {
        valid: false,
        description: `invalid postcode for ${response} appointments`,
      });
    }
  } else {
    res.send(422, {
      valid: false,
      description: `invalid postcode for ${response} appointments`,
    });
  }
});

/*
* Default route for postcodes with no country code.
* Route will test against UK postcodes.
*/

postcode.get('/postcode/:postcode', (req, res) => {
  const code = req.params.postcode.toUpperCase();
  if (postcodeValidator(code, 'UK')) {
    if (uk.test(code)) {
      res.send(200, {
        valid: true,
        description: `supported postcode for uk appointments`,
      });
    } else {
      res.send(422, {
        valid: false,
        description: `unsupported postcode for uk appointments`,
      });
    }
  } else {
    res.send(422, {
      valid: false,
      description: `invalid postcode for uk appointments`,
    });
  }
});

module.exports = postcode;
