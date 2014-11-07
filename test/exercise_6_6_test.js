'use strict';

var expect = require('chai').expect;
var flavius = require('../exercises/exercise_6_6');

describe('Exercise 6.6', function() {
  it('should determine the number of last two people left', function() {
    var numbersLeft = flavius(40, 3);
    expect(numbersLeft.length).equals(2);
    expect(numbersLeft[0]).equals(5);
    expect(numbersLeft[1]).equals(24);
  });
});
