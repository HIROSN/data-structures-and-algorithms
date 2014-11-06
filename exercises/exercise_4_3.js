'use strict';

var stack = require('../lib/stack');

module.exports = function(pez) {
  var tempStack = stack();

  while (!pez.empty()) {
    if (pez.top() !== 'yellow') {
      tempStack.push(pez.top());
    }
    pez.pop();
  }

  while (!tempStack.empty()) {
    pez.push(tempStack.top());
    tempStack.pop();
  }
};
