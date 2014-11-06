'use strict';

var exercise = process.argv[2];
console.log();

switch (exercise) {
  case '4.1':
    var colsMissingParentheses = require('./exercises/exercise_4_1');
    var expression = process.argv[3] || '2.3 + 23 / 12 + (3.14159 * .24';

    console.log(exercise, 'Expression:', expression);

    console.log('Columns missing parentheses:',
      colsMissingParentheses(expression));
    break;

  case '4.2':
    var infixToPostfix = require('./exercises/exercise_4_2');
    var infix = process.argv[3] || '2*3-4/5';
    var postfix = infixToPostfix(infix);

    console.log(exercise, 'Infix:', infix);
    console.log('Postfix:', postfix.postfix);
    console.log('Evaluated:', postfix.evaluated);
    break;

  default:
    console.log('Usage: node index 4.1');
    break;
}
