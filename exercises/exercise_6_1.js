'use strict';

var ListNode = require('../lib/listnode');

var LinkedList = function() {
  this.currentNode = this;
};

LinkedList.prototype = new ListNode();

LinkedList.prototype.advance = function(n) {
  n = n || 1;

  for (var i = 0; this.currentNode && i < n; i++) {
    this.currentNode = this.currentNode.next;
  }

  return this;
};

LinkedList.prototype.show = function() {
  return this.currentNode ?
    this.elementToString(this.currentNode.element) : '';
};

LinkedList.prototype.current = function() {
  return this.currentNode ? this.currentNode.element : null;
};

LinkedList.prototype.reset = function() {
  this.currentNode = this;
};

module.exports = LinkedList;
