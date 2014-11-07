'use strict';

var ListNode = function(element, next) {
  this.element = element;
  this.next = next || null;
};

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
  var node = this.findPrevious(element);

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
    str += (str ? ' -> ' : '') + this.elementToString(node.element);
    node = node.next;
  }

  return str;
};

ListNode.prototype.elementToString = function(element) {
  return (typeof element === 'object') ? element.toString() : '' + element;
};

ListNode.prototype.findPrevious = function(element) {
  var node = this;

  while (node && node.next && node.next.element != element) {
    node = node.next;
  }

  return node;
};

ListNode.prototype.isPalindrome = function() {
  if (this.next) {
    var result = {
      isPalindrome: null,
      node: this.next
    };

    this.next.isPalindromeRecursive(result);
    return result.isPalindrome;
  }

  return false;
};

ListNode.prototype.isPalindromeRecursive = function(result) {
  if (this.next) {
    this.next.isPalindromeRecursive(result);

    if (result.isPalindrome !== null) {
      return;
    }

    result.node = result.node.next;
  }

  if (result.node === this) {
    result.isPalindrome = true;
    return;
  }

  if (result.node.element !== this.element) {
    result.isPalindrome = false;
    return;
  }

  if (result.node.next === this) {
    result.isPalindrome = true;
  }
};

module.exports = ListNode;
