'use strict';

//var Container = require('./container');

var Queue = function() {
  this.dataStore = [];
};

Queue.prototype.back = function() {
  return this.dataStore[this.dataStore.length - 1];
};

Queue.prototype.empty = function() {
  return (0 === this.dataStore.length);
};

Queue.prototype.front = function() {
  return this.dataStore[0];
};

Queue.prototype.pop = function() {
  this.dataStore.shift();
  return this;
};

Queue.prototype.push = function(element) {
  this.dataStore.push(element);
  return this;
};

Queue.prototype.size = function() {
  return this.dataStore.length;
};

Queue.prototype.toString = function() {
  return this.dataStore.join(', ');
};

module.exports = Queue;
