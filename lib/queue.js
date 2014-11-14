'use strict';

var ContainerList = require('./container_list');

var Queue = function() {
  this.head = null;
  this.tail = null;
};

Queue.prototype = new ContainerList();
Queue.prototype.pop = ContainerList.prototype.popFront;
Queue.prototype.push = ContainerList.prototype.pushBack;

module.exports = Queue;
