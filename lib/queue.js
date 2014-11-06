'use strict';

module.exports = function() {
  function Queue() {}

  Queue.prototype.back = function() {
    return data[data.length - 1];
  };

  Queue.prototype.empty = function() {
    return (0 === data.length);
  };

  Queue.prototype.front = function() {
    return data[0];
  };

  Queue.prototype.pop = function() {
    data.shift();
    return this;
  };

  Queue.prototype.push = function(element) {
    data.push(element);
    return this;
  };

  Queue.prototype.size = function() {
    return data.length;
  };

  Queue.prototype.toString = function() {
    return data.join(', ');
  };

  var instance = new Queue();
  var data = [];

  return instance;
};
