'use strict';

var expect = require('chai').expect;
var ListNode = require('../lib/listnode');

describe('ListNode', function() {
  it('returns undefined as the element of a new list head', function() {
    expect(new ListNode().element).equals(undefined);
  });

  it('returns null as the next node of a new list head', function() {
    expect(new ListNode().next).equals(null);
  });

  it('returns undefined as element of empty list', function() {
    expect(new ListNode().element).equals(undefined);
  });

  it('finds itself as an object in empty list', function() {
    expect(new ListNode().find()).to.be.a('object');
    expect(new ListNode().find().element).equals(undefined);
  });

  it('returns string representation of empty list', function() {
    expect(new ListNode().toString()).to.be.a('string');
    expect(new ListNode().toString()).equals('');
  });

  it('can insert an element to empty list', function() {
    expect(new ListNode().
      insert('foo').
      toString()).equals('foo');
  });

  it('can insert to the beginning of a list', function() {
    expect(new ListNode().
      insert('foo').
      insert('bar').
      toString()).equals('bar -> foo');
  });

  it('finds an element in a list', function() {
    expect(new ListNode().
      insert('foo').
      insert('bar').
      find('foo').element).equals('foo');
  });

  it('returns null when an element is not found', function() {
    expect(new ListNode().
      insert('foo').
      insert('bar').
      find('bogus')).equals(null);
  });

  it('can insert after specified element', function() {
    expect(new ListNode().
      insert(3).
      insert(1).
      insert(2, 1).
      toString()).equals('1 -> 2 -> 3');
  });

  it('returns the size of empty list', function() {
    expect(new ListNode().size()).equals(0);
    expect(new ListNode().empty()).equals(true);
  });

  it('returns the size of a list', function() {
    expect(new ListNode().insert('foo').size()).equals(1);
    expect(new ListNode().insert('foo').empty()).equals(false);
    expect(new ListNode().insert(3).insert(5).size()).equals(2);
    expect(new ListNode().insert(3).insert(5).empty()).equals(false);
  });

  it('does nothing when an element is removed from empty list', function() {
    expect(new ListNode().
      remove('foo').
      empty()).equals(true);
  });

  it('can remove specified element', function() {
    expect(new ListNode().
      insert(3).
      insert(1).
      insert(2, 1).
      remove(2).
      toString()).equals('1 -> 3');
  });

  it('can remove element at the beginning of a list', function() {
    expect(new ListNode().
      insert(3).
      insert(1).
      insert(2, 1).
      remove(1).
      toString()).equals('2 -> 3');
  });

  it('can remove element at the end of a list', function() {
    expect(new ListNode().
      insert(3).
      insert(1).
      insert(2, 1).
      remove(3).
      toString()).equals('1 -> 2');
  });

  it('does nothing when non-existent element is removed', function() {
    expect(new ListNode().
      insert(3).
      insert(1).
      insert(2, 1).
      remove(4).
      toString()).equals('1 -> 2 -> 3');
  });

  it('can find 7 letter palindrome word', function() {
    expect(new ListNode().
      insert('R').
      insert('A').
      insert('C').
      insert('E').
      insert('C').
      insert('A').
      insert('R').
      isPalindrome()).equals(true);
  });

  it('can find 6 letter palindrome word', function() {
    expect(new ListNode().
      insert('p').
      insert('u').
      insert('l').
      insert('l').
      insert('u').
      insert('p').
      isPalindrome()).equals(true);
  });

  it('can find 7 letter non-palindrome word', function() {
    expect(new ListNode().
      insert('R').
      insert('A').
      insert('C').
      insert('E').
      insert('B').
      insert('A').
      insert('R').
      isPalindrome()).equals(false);
  });

  it('can find 6 letter non-palindrome word', function() {
    expect(new ListNode().
      insert('p').
      insert('u').
      insert('s').
      insert('h').
      insert('u').
      insert('p').
      isPalindrome()).equals(false);
  });

  it('is not a palindrome when the list is empty', function() {
    expect(new ListNode().
      isPalindrome()).equals(false);
  });

  it('finds one letter word as a palindrome', function() {
    expect(new ListNode().
      insert('A').
      isPalindrome()).equals(true);
  });

  it ('can find 2 letter palindrome word', function() {
    expect(new ListNode().
      insert('C').
      insert('C').
      isPalindrome()).equals(true);
  });

  it ('can find 2 letter non-palindrome word', function() {
    expect(new ListNode().
      insert('C').
      insert('D').
      isPalindrome()).equals(false);
  });
});
