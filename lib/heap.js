'use strict';

var Queue = require('./queue');

var HeapElement = function(element, priority) {
  this.element = element;
  this.priority = priority;
};

var Heap = function(comparator) {
  this.dataStore = [];

  this.comparator = comparator || function(a, b) {
    return a < b;
  };
};

Heap.prototype = new Queue();

Heap.prototype.back = function() {};

Heap.prototype.front = function() {
  return this.dataStore[this.indexFront()] &&
    this.dataStore[this.indexFront()].element;
};

Heap.prototype.indexFront = function() {
  var index = 0;
  var priority = this.dataStore[0] && this.dataStore[0].priority;

  for (var i = 0; i < this.dataStore.length; i++) {
    if (this.comparator(this.dataStore[i].priority, priority)) {
      index = i;
      priority = this.dataStore[i].priority;
    }
  }

  return index;
};

Heap.prototype.pop = function() {
  this.dataStore.splice(this.indexFront(), 1);
  return this;
};

Heap.prototype.popBack = function() {};

Heap.prototype.popFront = function() {};

Heap.prototype.push = function(element, priority) {
  this.dataStore.push(new HeapElement(element, priority || 1));
  return this;
};

Heap.prototype.pushBack = function() {};

Heap.prototype.pushFront = function() {};

Heap.prototype.toString = function() {
  var str = '';

  for (var i = 0; i < this.dataStore.length; i++) {
    str += str ? ', ' : '';
    str += this.dataStore[i].element;
    str += ' [' + this.dataStore[i].priority + ']';
  }

  return str;
};

module.exports = Heap;
