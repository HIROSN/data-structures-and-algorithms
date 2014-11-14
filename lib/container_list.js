'use strict';

var ListNode = require('./listnode');

var ContainerList = function() {
  this.head = null;
  this.tail = null;
  this.count = 0;
};

ContainerList.prototype.back = function() {
  return this.tail && this.tail.element || undefined;
};

ContainerList.prototype.empty = function() {
  return !this.head;
};

ContainerList.prototype.front = function() {
  return this.head && this.head.element || undefined;
};

ContainerList.prototype.popFront = function() {
  if (this.head) {
    this.head = this.head.next;
    this.count--;
  }

  if (!this.head) {
    this.tail = null;
  }

  return this;
};

ContainerList.prototype.pushBack = function(element) {
  var node = new ListNode(element);
  this.count++;

  if (!this.tail) {
    this.head = node;
    this.tail = node;
  }
  else {
    this.tail.next = node;
    this.tail = node;
  }

  return this;
};

ContainerList.prototype.pushFront = function(element) {
  var node = new ListNode(element);
  this.count++;

  if (!this.head) {
    this.head = node;
    this.tail = node;
  }
  else {
    node.next = this.head;
    this.head = node;
  }

  return this;
};

ContainerList.prototype.size = function() {
  return this.count;
};

ContainerList.prototype.toString = function() {
  var str = '';

  for (var node = this.head; node; node = node.next) {
    str += (str ? ', ' : '') + node.element;
  }

  return str;
};

module.exports = ContainerList;
