'use strict';

var expect = require('chai').expect;
var Deque = require('../lib/container');

describe('Exercise 5.1', function() {
  it('should be able to add and remove from back', function() {
    expect(new Deque().
      pushBack(1).
      pushBack(2).
      pushBack(3).
      popBack().
      toString()).equals('1, 2');
  });

  it('should be able to add and remove from front', function() {
    expect(new Deque().
      pushFront(1).
      pushFront(2).
      pushFront(3).
      popFront().
      toString()).equals('2, 1');
  });
});
