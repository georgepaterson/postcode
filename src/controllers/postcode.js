const express = require('express');
const postcode = express.Router();
const {postcodeValidator, postcodeValidatorExistsForCountry} = require('postcode-validator');

/*
* 
*/

postcode.get('/postcode/:country/:postcode', function (req, res) {
  const country = req.params.country.toUpperCase();
  const code = req.params.postcode.toUpperCase();
  if(postcodeValidatorExistsForCountry(country)) {
    if(postcodeValidator(code, country)) {
      res.send({
        status: 'Ok: Valid postcode for ' + country
      });
    } else {
      res.send({
        status: 'Error: Invalid postcode for ' + country
      });
    }
  } else {
    res.send({
      status: 'Error: Invalid country'
    });
  }
});

postcode.get('/postcode/:postcode', function (req, res) {
  const code = req.params.postcode.toUpperCase();
  if(postcodeValidator(code, 'GB')) {
    res.send({
      status: 'Ok: Valid postcode for GB'
    });
  } else {
    res.send({
      status: 'Error: Invalid postcode for GB'
    });
  }
});


/*
* TODO:
* If valid postcode in service area, return true.
*/

module.exports = postcode;