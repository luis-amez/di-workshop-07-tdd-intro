var chai = require('chai');
var expect = chai.expect;

var Coolculator = require('../lib/coolculator');

describe('Coolculator', function() {
  mm = new Coolculator();

  it('should add two numbers', function() {
    result = mm.add(2, 3);
    expect(result).to.equal(5);
  })

  it('should add more than two numbers', function() {
    result = mm.add(2, 3, 4, 5, 6);
    expect(result).to.equal(20);
  })

  it('should multiply', function() {
    result = mm.multiply(2, 3)
    expect(result).to.equal(6)
  })

  it('should subtract', function() {
    result = mm.subtract(3, 2)
    expect(result).to.equal(1)
  })
})
