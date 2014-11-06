'use strict';

var stack = require('../lib/stack');

module.exports = function(expression) {
  var cols = [];
  var parenthesisStack = stack();

  for (var i = 0; i < expression.length; i++) {
    switch (expression[i]) {
      case '(':
        parenthesisStack.push(i + 1);
        break;

      case ')':
        if (parenthesisStack.empty()) {
          cols.push(i + 1);
        }
        else {
          parenthesisStack.pop();
        }
        break;
    }
  }

  while (!parenthesisStack.empty()) {
    cols.push(parenthesisStack.top());
    parenthesisStack.pop();
  }

  cols.sort(function(a, b) {
    return a - b;
  });

  return cols.length > 1 ? cols : cols[0];
};
