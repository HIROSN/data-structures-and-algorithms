'use strict';

var expect = require('chai').expect;
var queue = require('../lib/queue');

describe('queue', function() {
  it('returns undefined as back of empty queue', function() {
    expect(queue().back()).equals(undefined);
  });

  it('returns zero as the size of empty queue', function() {
    expect(queue().size()).equals(0);
  });

  it('can push an element and return the size of a queue', function() {
    expect(queue().
      push('foo').
      size()).equals(1);
  });

  it('returns the element at the back of a queue', function() {
    expect(queue().
      push('foo').
      push('bar').
      back()).equals('bar');
  });

  it('returns true for empty queue', function() {
    expect(queue().empty()).equals(true);
  });

  it('returns false for non-empty queue', function() {
    expect(queue().push(1).empty()).equals(false);
  });

  it('returns undefined as front of empty queue', function() {
    expect(queue().front()).equals(undefined);
  });

  it('returns the element at the front of a queue', function() {
    expect(queue().
      push('foo').
      push('bar').
      front()).equals('foo');
  });

  it('can pop the front of a queue', function() {
    expect(queue().
      push('foo').
      push('bar').
      pop().
      front()).equals('bar');
  });

  it('returns the size after push/pop elements', function() {
    expect(queue().
      push('foo').
      push('bar').
      pop().
      size()).equals(1);
  });

  it('returns string representation of a queue', function() {
    expect(queue().
      push('foo').
      push('bar').
      toString()).equals('foo, bar');
  });

  it('returns string representation of empty queue', function() {
    expect(queue().toString()).to.be.a('string');
    expect(queue().toString()).equals('');
  });
});
