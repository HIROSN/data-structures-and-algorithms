'use strict';

var expect = require('chai').expect;
var isPalindrome = require('../exercises/exercise_5_2');

describe('Exercise 5.2', function() {
  it('RACECAR is a palindrome', function() {
    expect(isPalindrome('RACECAR')).equals(true);
  });

  it('selfless is not a palindrome', function() {
    expect(isPalindrome('selfless')).equals(false);
  });
});
