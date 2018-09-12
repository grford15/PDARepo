var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('can add 2+3 and get 5', function(){
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, '5');
  });

  it('can subtract 5-4 and get 1' , function(){
    calculator.numberClick(5);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, '1');
  });

  it('can divide 15/3 and get 5', function(){
    calculator.numberClick(15);
    calculator.operatorClick('/');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, '5');
  });

  it('can multiply 5x3 and get 15', function(){
    calculator.numberClick(5);
    calculator.operatorClick('*');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, '15');
  });

  it('can concatenate multiple number button clicks', function(){
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    assert.equal(calculator.runningTotal, '123');
  });

  it('can chain multiple operations together', function(){
    calculator.numberClick(2);
    calculator.operatorClick('*');
    calculator.numberClick(3);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, '10');
  });

  it('can clear the running total without affecting the calculation', function(){
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.operatorClick('/');
    calculator.numberClick(2);
    calculator.clearClick();
    calculator.numberClick(6);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, '2');
  })

});
