'use strict';

var expect = require('chai').expect;
var LinkedList = require('../exercises/exercise_6_1');

describe('Exercise 6.1', function() {
  it('moves the current node forward by N nodes', function() {
    expect(new LinkedList().
      insert('node4').
      insert('node3').
      insert('node2').
      insert('node1').
      advance(2).
      show()).equals('node2');
  });

  it('can iterate through elements in the list', function() {
    var list = new LinkedList();

    expect(list.
      insert('node3').
      insert('node2').
      insert('node1').
      toString()).equals('node1 -> node2 -> node3');

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
});
