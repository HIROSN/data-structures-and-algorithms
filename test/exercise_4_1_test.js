'use strict';

var expect = require('chai').expect;
var colsMissingParentheses = require('../exercises/exercise_4_1');

describe('Exercise 4.1', function() {
  it('finds one opening parenthesis', function() {
    expect(colsMissingParentheses(
      '2.3 + 23 / 12 + (3.14159 * .24')).equals(17);
  });

  it('finds one closing parenthesis', function() {
    expect(colsMissingParentheses(
      '1 * 2 + 3) / 4')).equals(10);
  });

  it('finds an error in nested parentheses', function() {
    expect(colsMissingParentheses(
      '4 * ( 6 - 2 * (4 - 2)')).equals(5);
  });

  it('finds multiple errors', function() {
    var expression = '1 + 2) * 3 - 9) / 4 * ( 6 - 2 * (4 - 2';
    var cols = colsMissingParentheses(expression);
    expect(Array.isArray(cols)).equals(true);
    expect(cols.length).equals(4);
    expect(cols[0]).equals(6);
    expect(cols[1]).equals(15);
    expect(cols[2]).equals(23);
    expect(cols[3]).equals(33);
  });

  it('returns undefined when there is no error', function() {
    expect(colsMissingParentheses(
      '4 * ( 6 - 2 * (4 - 2) )')).equals(undefined);
  });
});
