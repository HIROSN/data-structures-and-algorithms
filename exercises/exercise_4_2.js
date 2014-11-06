'use strict';

var Stack = require('../lib/stack');

module.exports = function(infix) {
  var result = {
    postfix: [], // Will be joined and returned as a string.
    evaluated: 0
  };

  var operators = {
    '*': {precedence: 1},
    '/': {precedence: 1},
    '+': {precedence: 2},
    '-': {precedence: 2},
    '(': {precedence: null},
    ')': {precedence: null}
  };

  var operandStack = new Stack();
  var operatorStack = new Stack();
  var operand;
  var str;
  var s = 0;

  var evaluate = function() {
    var evaluated = 0;
    var b = operandStack.top();
    operandStack.pop();
    var a = operandStack.top();
    operandStack.pop();

    switch (operatorStack.top()) {
      case '*': evaluated = a * b; break;
      case '/': evaluated = a / b; break;
      case '+': evaluated = a + b; break;
      case '-': evaluated = a - b; break;
    }

    result.postfix.push(operatorStack.top());
    operatorStack.pop();
    operandStack.push(evaluated);
    return evaluated;
  };

  for (var i = 0; i < infix.length; i++) {
    for (var operator in operators) {
      if (infix[i] === operator) {
        /* 1. Print operands as they arrive. */
        if (s < i) {
          str = infix.substring(s, i).trim();

          if (str.length > 0) {
            operand = Number(str);
            operandStack.push(operand);
            result.postfix.push(operand);
          }

          s = i + 1;
        }
        /* 2. If the stack is empty or contains a left parenthesis on top,
          push the incoming operator onto the stack. */
        if (operatorStack.empty() || operatorStack.top() === '(') {
          operatorStack.push(operator);
          break;
        }
        /* 3. If the incoming symbol is a left parenthesis, push it on
          the stack. */
        if ('(' === operator) {
          operatorStack.push(operator);
          break;
        }
        /* 4. If the incoming symbol is a right parenthesis, pop the
          stack and print the operators until you see a left parenthesis.
          Discard the pair of parentheses. */
        if (operator === ')') {
          while (!operatorStack.empty()) {
            if ('(' === operatorStack.top()) {
              operatorStack.pop();
              break;
            }

            evaluate();
          }
          break;
        }
        /* 5. If the incoming symbol has higher precedence than the
          top of the stack, push it on the stack. */
        if (operators[operator].precedence <
          operators[operatorStack.top()].precedence) {
          operatorStack.push(operator);
          break;
        }
        /* 6. If the incoming symbol has equal precedence with the
          top of the stack, pop and print the top of the stack and then
          push the incoming operator. */
        if (operators[operator].precedence ===
          operators[operatorStack.top()].precedence) {
          evaluate();
          operatorStack.push(operator);
          break;
        }
        /* 7. If the incoming symbol has lower precedence than the symbol
          on the top of the stack, pop the stack and print the top operator.
          Then test the incoming operator against the new top of stack. */
        evaluate();
        --i;
        break;
      }
    }
  }
  /* Print the last operand. */
  if (s < infix.length) {
    str = infix.substring(s).trim();

    if (str.length > 0) {
      operand = Number(str);
      operandStack.push(operand);
      result.postfix.push(operand);
    }
  }
  /* 8. At the end of the expression, pop and print all operators on
    the stack. */
  while (!operatorStack.empty()) {
    evaluate();
  }

  result.postfix = result.postfix.join(' ');
  result.evaluated = operandStack.top();
  return result;
};
