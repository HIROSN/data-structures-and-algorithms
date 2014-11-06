'use strict';

var expect = require('chai').expect;
var Heap = require('../lib/heap');

describe('Heap', function() {
  it('returns undefined as front of empty min-heap', function() {
    expect(new Heap().front()).equals(undefined);
  });

  it('returns zero as the size of empty min-heap', function() {
    expect(new Heap().size()).equals(0);
  });

  it('returns the element at the front of a min-heap', function() {
    expect(new Heap().
      push('foo').
      push('bar').
      front()).equals('foo');
  });

  it('returns the element with min priority value', function() {
    expect(new Heap().
      push('foo', 2).
      push('bar', 1).
      front()).equals('bar');
  });

  it('returns true for empty min-heap', function() {
    expect(new Heap().empty()).equals(true);
  });

  it('can pop the front of a min-heap', function() {
    expect(new Heap().
      push('foo').
      push('bar').
      pop().
      front()).equals('bar');
  });

  it('can pop the element with min priority value', function() {
    expect(new Heap().
      push('foo', 2).
      push('bar', 1).
      pop().
      front()).equals('foo');
  });

  it('can pop from the end of min-heap', function() {
    expect(new Heap().
      push('P3', 3).
      push('P2', 2).
      push('P1', 1).
      pop().
      size()).equals(2);
  });

  it('should pop only one element', function() {
    expect(new Heap().
      push('P3', 3).
      push('P1', 1).
      push('P2', 2).
      pop().
      toString()).equals('P3 [3], P2 [2]');
  });

  it('can return the element with max priority value', function() {
    expect(new Heap(function(a, b) {return a > b;}).
      push('P1', 1).
      push('P2', 2).
      push('P3', 3).
      front()).equals('P3');
  });
});
