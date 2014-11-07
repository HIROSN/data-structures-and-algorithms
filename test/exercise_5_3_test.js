'use strict';

var expect = require('chai').expect;
var Heap = require('../lib/heap');

describe('Exercise 5.3', function() {
  it('should return elements with higher numbers as priority', function() {
    var maxHeap = new Heap(function(a, b) {return a > b;});

    maxHeap.push('Smith', 5);
    maxHeap.push('Jones', 4);
    maxHeap.push('Fehrenbach', 6);
    maxHeap.push('Brown', 1);
    maxHeap.push('Ingram', 1);

    expect(maxHeap.toString()).equals(
      'Smith [5], Jones [4], Fehrenbach [6], Brown [1], Ingram [1]');

    expect(maxHeap.front()).equals('Fehrenbach');
    maxHeap.pop();

    expect(maxHeap.toString()).equals(
      'Smith [5], Jones [4], Brown [1], Ingram [1]');

    expect(maxHeap.front()).equals('Smith');
    maxHeap.pop();

    expect(maxHeap.toString()).equals(
      'Jones [4], Brown [1], Ingram [1]');

    expect(maxHeap.front()).equals('Jones');
    maxHeap.pop();

    expect(maxHeap.toString()).equals(
      'Brown [1], Ingram [1]');

    expect(maxHeap.front()).equals('Brown');
    maxHeap.pop();
  });
});
