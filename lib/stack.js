'use strict';

module.exports = function() {
  function Stack() {}

  Stack.prototype.empty = function() {
    return (0 === data.length);
  };

  Stack.prototype.pop = function() {
    data.shift();
    return this;
  };

  Stack.prototype.push = function(element) {
    data.unshift(element);
    return this;
  };

  Stack.prototype.size = function() {
    return data.length;
  };

  Stack.prototype.top = function() {
    return data[0];
  };

  Stack.prototype.toString = function() {
    return data.join(', ');
  };

  var instance = new Stack();
  var data = [];

  return instance;
};
