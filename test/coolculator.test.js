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
    result = mm.multiply(2, 3);
    expect(result).to.equal(6);
  })

  it('should subtract', function() {
    result = mm.subtract(3, 2);
    expect(result).to.equal(1);
  })

  it('should divide', function() {
    result = mm.divide(10, 5);
    expect(result).to.equal(2);
  })

  it('should calculate the factoria', function() {
    result = mm.factorial(5);
    expect(result).to.equal(120);
  })

  it('shoul return a random number between 0 and a given value (included)', function() {
    randomValues = [];
    for(let i = 0; i < 1000; i++) {
      randomValues.push(mm.random(10));
    }
    min = Math.min(...randomValues);
    max = Math.max(...randomValues);
    
    expect(min).to.be.at.least(0);
    expect(min).to.be.at.most(10);
  })
})
