'use strict';

var expect = require('chai').expect;
var DoublyLinkedList = require('../exercises/exercise_6_2_and_3');

describe('Exercise 6.2 and 6.3', function() {
  var list = new DoublyLinkedList();

  it('moves and shows the current node forward by N nodes', function() {
    expect(list.
      insert('node4').
      insert('node3').
      insert('node2').
      insert('node1').
      advance(4).
      show()).equals('node4');
  });

  it('moves and shows the current node back by N nodes', function() {
    expect(list.
      back(2).
      show()).equals('node2');
  });

  it('can iterate forward through elements in the list', function() {
    var list = new DoublyLinkedList();

    expect(list.
      insert('node3').
      insert('node2').
      insert('node1').
      toString()).equals('node1 <--> node2 <--> node3');

    for (var i = 0; i < 2; i++) {
      var n = 0;

      for (list.advance(); list.current(); list.advance()) {
        expect(list.current()).equals('node' + (++n));
        expect(list.show()).equals('node' + n);
      }

      expect(n).equals(3);
      list.reset();
    }
  });

  it('can iterate back through elements in the list', function() {
    var list = new DoublyLinkedList();

    expect(list.
      insert('node3').
      insert('node2').
      insert('node1').
      toString()).equals('node1 <--> node2 <--> node3');

    for (var i = 0; i < 2; i++) {
      list.advance().advance().advance();
      expect(list.toString()).equals('node1 <--> node2 <--> node3');

      for (var n = 3; list.current(); list.back()) {
        expect(list.current()).equals('node' + n);
        expect(list.show()).equals('node' + (n--));
      }

      expect(n).equals(0);
      list.reset();
    }
  });

  it('can insert an element', function() {
    expect(new DoublyLinkedList().
      insert('node3').
      insert('node1').
      insert('node2', 'node1').
      toString()).equals('node1 <--> node2 <--> node3');
  });

  it('can insert an element at the end', function() {
    expect(new DoublyLinkedList().
      insert('node2').
      insert('node1').
      insert('node3', 'node2').
      toString()).equals('node1 <--> node2 <--> node3');
  });

  it('can remove an element', function() {
    expect(new DoublyLinkedList().
      insert('node3').
      insert('node2').
      insert('node1').
      remove('node2').
      toString()).equals('node1 <--> node3');
  });

  it('it can remove an element from the begging', function() {
    expect(new DoublyLinkedList().
      insert('node3').
      insert('node2').
      insert('node1').
      remove('node1').
      toString()).equals('node2 <--> node3');
  });

  it('it can remove an element from the end', function() {
    expect(new DoublyLinkedList().
      insert('node3').
      insert('node2').
      insert('node1').
      remove('node3').
      toString()).equals('node1 <--> node2');
  });
});
