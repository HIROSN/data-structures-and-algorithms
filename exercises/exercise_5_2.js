'use strict';

var Deque = require('../lib/container');

module.exports = function(word) {
  var isPalindrome = true;
  var deque = new Deque();

  for (var i = 0; i < word.length; i++) {
    deque.pushBack(word[i]);
  }

  while (deque.size() > 1) {
    if (deque.front() !== deque.back()) {
      isPalindrome = false;
      break;
    }

    deque.popBack();
    deque.popFront();
  }

  return isPalindrome;
};
