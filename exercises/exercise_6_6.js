'use strict';

var LinkedList = require('./exercise_6_1');

module.exports = function(n, m) {
  var numbersLeft = [];
  var list = new LinkedList();
  var remove;
  var i;

  for (i = 0; i < n; i++) {
    list.insert(n - i);
  }

  list.find(n).next = list.find(1);

  for (i = 0; i < n - m + 1; i++) {
    list.advance(m);
    remove = list.current();
    list.advance();
    list.remove(list.find(remove).element);
  }

  list.reset();

  for (i = 0; i < m - 1; i++) {
    list.advance();
    numbersLeft.push(list.current());
  }

  return numbersLeft;
};
