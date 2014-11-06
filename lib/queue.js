'use strict';

var Container = require('./container');

var Queue = function() {
  this.dataStore = [];
};

Queue.prototype = new Container();
Queue.prototype.pop = Container.prototype.popFront;
Queue.prototype.push = Container.prototype.pushBack;

module.exports = Queue;
