'use strict';

var Stack = require('../lib/stack');

module.exports = function(pez) {
  var tempStack = new Stack();

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
