'use strict';

var Container = require('./container');

var Stack = function() {
  this.dataStore = [];
};

Stack.prototype = new Container();
Stack.prototype.pop = Container.prototype.popFront;
Stack.prototype.push = Container.prototype.pushFront;
Stack.prototype.top = Container.prototype.front;

module.exports = Stack;
