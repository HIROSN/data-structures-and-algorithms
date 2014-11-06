'use strict';

module.exports = function() {
  function ListNode(element, next) {
    this.element = element;
    this.next = next || null;
  }

  ListNode.prototype.empty = function() {
    return (0 === this.size());
  };

  ListNode.prototype.find = function(element) {
    var node = this;

    while (node && node.element != element) {
      node = node.next;
    }

    return node;
  };

  ListNode.prototype.insert = function(element, after) {
    var found = this.find(after);
    var node = new ListNode(element, found.next);
    found.next = node;
    return this;
  };

  ListNode.prototype.remove = function(element) {
    var node = findPrevious(element);

    if (node && node.next) {
      node.next = node.next.next;
    }

    return this;
  };

  ListNode.prototype.size = function() {
    var size = 0;
    var node = this.next;

    while (node) {
      ++size;
      node = node.next;
    }

    return size;
  };

  ListNode.prototype.toString = function() {
    var str = '';
    var node = this.next;

    while (node) {
      str += (str ? ' -> ' : '') + node.element;
      node = node.next;
    }

    return str;
  };

  var instance = new ListNode();

  var findPrevious = function(element) {
    var node = instance;

    while (node && node.next && node.next.element != element) {
      node = node.next;
    }

    return node;
  };

  return instance;
};
