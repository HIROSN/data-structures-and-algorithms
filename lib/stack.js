'use strict';

var Stack = function() {
  this.dataStore = [];
};

Stack.prototype.empty = function() {
  return (0 === this.dataStore.length);
};

Stack.prototype.pop = function() {
  this.dataStore.shift();
  return this;
};

Stack.prototype.push = function(element) {
  this.dataStore.unshift(element);
  return this;
};

Stack.prototype.size = function() {
  return this.dataStore.length;
};

Stack.prototype.top = function() {
  return this.dataStore[0];
};

Stack.prototype.toString = function() {
  return this.dataStore.join(', ');
};

module.exports = Stack;
