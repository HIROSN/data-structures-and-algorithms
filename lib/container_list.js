'use strict';

var ListNode = require('./listnode');

var ContainerList = function() {
  this.head = null;
  this.tail = null;
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
  if (this.head) { this.head = this.head.next; }
  if (!this.head) { this.tail = null; }
  return this;
};

ContainerList.prototype.pushBack = function(element) {
  var node = new ListNode(element);

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
  var size = 0;

  for (var node = this.head; node; node = node.next) {
    ++size;
  }

  return size;
};

ContainerList.prototype.toString = function() {
  var str = '';

  for (var node = this.head; node; node = node.next) {
    str += (str ? ', ' : '') + node.element;
  }

  return str;
};

module.exports = ContainerList;
