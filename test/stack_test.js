'use strict';

var expect = require('chai').expect;
var Stack = require('../lib/stack');

describe('Stack', function() {
  it('returns undefined as top of empty stack', function() {
    expect(new Stack().top()).equals(undefined);
  });

  it('returns zero as the size of empty stack', function() {
    expect(new Stack().size()).equals(0);
  });

  it('can push an element and return the size of a stack', function() {
    expect(new Stack().
      push('foo').
      size()).equals(1);
  });

  it('returns the element at the top of a stack', function() {
    expect(new Stack().
      push('foo').
      push('bar').
      top()).equals('bar');
  });

  it('returns true for empty stack', function() {
    expect(new Stack().empty()).equals(true);
  });

  it('returns false for non-empty stack', function() {
    expect(new Stack().push(1).empty()).equals(false);
  });

  it('can pop the top of a stack', function() {
    expect(new Stack().
      push('foo').
      push('bar').
      pop().
      top()).equals('foo');
  });

  it('returns the size after push/pop elements', function() {
    expect(new Stack().
      push('foo').
      push('bar').
      pop().
      size()).equals(1);
  });

  it('returns string representation of a stack', function() {
    expect(new Stack().
      push('foo').
      push('bar').
      toString()).equals('bar, foo');
  });

  it('returns string representation of empty stack', function() {
    expect(new Stack().toString()).to.be.a('string');
    expect(new Stack().toString()).equals('');
  });
});
