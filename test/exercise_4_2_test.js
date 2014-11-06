'use strict';

var expect = require('chai').expect;
var infixToPostfix = require('../exercises/exercise_4_2');

describe('Exercise 4.2', function() {
  it('A * B + C becomes A B * C +', function() {
    var result = infixToPostfix('1 * 2 + 3');
    expect(result.postfix).equals('1 2 * 3 +');
    expect(result.evaluated).equals(5);
  });

  it('A + B * C becomes A B C * +', function() {
    var result = infixToPostfix('1 + 2 * 3');
    expect(result.postfix).equals('1 2 3 * +');
    expect(result.evaluated).equals(7);
  });

  it('A * (B + C) becomes A B C + *', function() {
    var result = infixToPostfix('2 * (3 + 4)');
    expect(result.postfix).equals('2 3 4 + *');
    expect(result.evaluated).equals(14);
  });

  it('A - B + C becomes A B - C +', function() {
    var result = infixToPostfix('1 - 2 + 3');
    expect(result.postfix).equals('1 2 - 3 +');
    expect(result.evaluated).equals(2);
  });

  it('A * (B + C * D) + E becomes A B C D * + * E +', function() {
    var result = infixToPostfix('1 * (2 + 3 * 4) + 5');
    expect(result.postfix).equals('1 2 3 4 * + * 5 +');
    expect(result.evaluated).equals(19);
  });
});
