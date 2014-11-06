'use strict';

var Container = function() {
  this.dataStore = [];
};

Container.prototype.clear = function() {
  this.dataStore = [];
  return this;
};

Container.prototype.empty = function() {
  return (0 === this.dataStore.length);
};

Container.prototype.popFront = function() {
  this.dataStore.shift();
  return this;
};

Container.prototype.pushFront = function(element) {
  this.dataStore.unshift(element);
  return this;
};

Container.prototype.size = function() {
  return this.dataStore.length;
};

Container.prototype.front = function() {
  return this.dataStore[0];
};

Container.prototype.toString = function() {
  return this.dataStore.join(', ');
};

module.exports = Container;
