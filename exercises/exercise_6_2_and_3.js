'use strict';

var LinkedList = require('./exercise_6_1');

var DoublyLinkedList = function(element, next, previous) {
  this.element = element;
  this.next = next || null;
  this.previous = previous || null;
  this.currentNode = this;
};

DoublyLinkedList.prototype = new LinkedList();

DoublyLinkedList.prototype.back = function(n) {
  n = n || 1;

  for (var i = 0; this.currentNode && i < n; i++) {
    this.currentNode = this.currentNode.previous;
  }

  return this;
};

DoublyLinkedList.prototype.insert = function(element, after) {
  var found = this.find(after);

  var node = new DoublyLinkedList(
    element, found.next, (found === this) ? null : found);

  if (found.next) {
    found.next.previous = node;
  }

  found.next = node;
  return this;
};

DoublyLinkedList.prototype.remove = function(element) {
  var node = this.findPrevious(element);

  if (node && node.next) {
    if (node.next.next) {
      node.next.next.previous = (node === this) ? null : node;
    }

    node.next = node.next.next;
  }

  return this;
};

DoublyLinkedList.prototype.toString = function() {
  var str = '';
  var node = this.next;
  var prev = this;

  while (node) {
    str += (node.previous === prev) ? ' <-' : '';
    str += (str && prev.next === node) ? '-> ' : '';
    str += this.elementToString(node.element);
    prev = node;
    node = node.next;
  }

  return str;
};

module.exports = DoublyLinkedList;
