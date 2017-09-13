var assert = require('assert');
var expect = require('chai').expect;

let Openiban;
if (window.Openiban) {
  // Browser
  Openiban = window.Openiban;
} else {
  // Node
  Openiban = require('../dist/openiban.node.js');
}

describe('Openiban', () => {
  it('should return a positive result for valid IBANs', (done) => {
    Openiban.validate('DE89370400440532013000')
      .then((result) => {
        expect(result.valid).to.equal(true);
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

  it('should return a negative result for invalid IBANs', (done) => {
    Openiban.validate('DE12345678910')
      .then((result) => {
        expect(result.valid).to.equal(false);
        done();
      })
      .catch((error) => {
        done(error);
      });
  });

});