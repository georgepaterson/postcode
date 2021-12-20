const { postcodeValidator, postcodeValidatorExistsForCountry } = require('postcode-validator');

/*
*
*/

async function postcode(req, res) {

/*
* TODO:
* Check data source for country code.
* If valid country code, check postcode against validator.
* Default to UK postcode validator.
* If valid postcode in service area, return true.
*/

  const test = postcodeValidator('W85TT', 'GB');
  console.log(test);

  return true;
}

module.exports = postcode;