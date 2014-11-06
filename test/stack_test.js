'use strict';

var expect = require('chai').expect;
var stack = require('../lib/stack');

describe('stack', function() {
  it('returns undefined as top of empty stack', function() {
    expect(stack().top()).equals(undefined);
  });

  it('returns zero as the size of empty stack', function() {
    expect(stack().size()).equals(0);
  });

  it('can push an element and return the size of a stack', function() {
    expect(stack().
      push('foo').
      size()).equals(1);
  });

  it('returns the element at the top of a stack', function() {
    expect(stack().
      push('foo').
      push('bar').
      top()).equals('bar');
  });

  it('returns true for empty stack', function() {
    expect(stack().empty()).equals(true);
  });

  it('returns false for non-empty stack', function() {
    expect(stack().push(1).empty()).equals(false);
  });

  it('can pop the top of a stack', function() {
    expect(stack().
      push('foo').
      push('bar').
      pop().
      top()).equals('foo');
  });

  it('returns the size after push/pop elements', function() {
    expect(stack().
      push('foo').
      push('bar').
      pop().
      size()).equals(1);
  });

  it('returns string representation of a stack', function() {
    expect(stack().
      push('foo').
      push('bar').
      toString()).equals('bar, foo');
  });

  it('returns string representation of empty stack', function() {
    expect(stack().toString()).to.be.a('string');
    expect(stack().toString()).equals('');
  });
});
