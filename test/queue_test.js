'use strict';

var expect = require('chai').expect;
var Queue = require('../lib/queue');

describe('Queue', function() {
  it('returns undefined as back of empty queue', function() {
    expect(new Queue().back()).equals(undefined);
  });

  it('returns zero as the size of empty queue', function() {
    expect(new Queue().size()).equals(0);
  });

  it('can push an element and return the size of a queue', function() {
    expect(new Queue().
      push('foo').
      size()).equals(1);
  });

  it('returns the element at the back of a queue', function() {
    expect(new Queue().
      push('foo').
      push('bar').
      back()).equals('bar');
  });

  it('returns true for empty queue', function() {
    expect(new Queue().empty()).equals(true);
  });

  it('returns false for non-empty queue', function() {
    expect(new Queue().push(1).empty()).equals(false);
  });

  it('returns undefined as front of empty queue', function() {
    expect(new Queue().front()).equals(undefined);
  });

  it('returns the element at the front of a queue', function() {
    expect(new Queue().
      push('foo').
      push('bar').
      front()).equals('foo');
  });

  it('can pop the front of a queue', function() {
    expect(new Queue().
      push('foo').
      push('bar').
      pop().
      front()).equals('bar');
  });

  it('returns the size after push/pop elements', function() {
    expect(new Queue().
      push('foo').
      push('bar').
      pop().
      size()).equals(1);
  });

  it('returns string representation of a queue', function() {
    expect(new Queue().
      push('foo').
      push('bar').
      toString()).equals('foo, bar');
  });

  it('returns string representation of empty queue', function() {
    expect(new Queue().toString()).to.be.a('string');
    expect(new Queue().toString()).equals('');
  });
});
