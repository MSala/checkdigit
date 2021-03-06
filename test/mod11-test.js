var mod11 = require('../').mod11;
var should = require('should');

describe('mod11', function() {
  var testcases = [
    { input: '1234567890', controldigit: '3' }
  , { input: '12345678', controldigit: '5' }
  , { input: '12444148', controldigit: '-' }
  , { input: '1234567897', controldigit: '0' }
  ];

  describe('create', function() {
    testcases.forEach(function(testcase) {
      var expected = testcase.controldigit;
      it('should return \'' + expected + '\' for input \'' + testcase.input + '\'', function() {
        mod11.create(testcase.input).should.eql(expected);
      });
    });
  });
  describe('apply', function() {
    testcases.forEach(function(testcase) {
      var expected = testcase.input + testcase.controldigit;
      it('should return \'' + expected + '\' for input \'' + testcase.input + '\'', function() {
        mod11.apply(testcase.input).should.eql(expected);
      });
    });
  });
  describe('validate', function() {
    testcases.forEach(function(testcase) {
      '0123456789-'.split('').forEach(function(digit) {
        var shouldBeValid = digit == testcase.controldigit;
        var value = testcase.input + digit;
        it('\'' + value + '\' should be ' + (shouldBeValid ? '' : 'in') + 'valid', function() {
          mod11.isValid(value).should.eql(shouldBeValid);
        });
      });
    });
  });
});
