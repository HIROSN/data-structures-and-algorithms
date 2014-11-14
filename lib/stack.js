'use strict';

var ContainerList = require('./container_list');

var Stack = function() {
  this.head = null;
  this.tail = null;
};

Stack.prototype = new ContainerList();
Stack.prototype.pop = ContainerList.prototype.popFront;
Stack.prototype.push = ContainerList.prototype.pushFront;
Stack.prototype.top = ContainerList.prototype.front;

module.exports = Stack;
