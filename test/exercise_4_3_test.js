'use strict';

var expect = require('chai').expect;
var removeYellowPez = require('../exercises/exercise_4_3');
var Stack = require('../lib/stack');

describe('Exercise 4.3', function() {
  it('should remove yellow pez', function() {
    var pez = new Stack();
    pez.push('red');
    pez.push('yellow');
    pez.push('white');
    removeYellowPez(pez);
    expect(pez.toString()).equals('white, red');
  });
});
