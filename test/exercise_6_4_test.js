'use strict';

var expect = require('chai').expect;
var LinkedList = require('../exercises/exercise_6_1');

var studentList = require(
  '../exercises/exercise_6_4_and_5')(new LinkedList());

describe('Exercise 6.4', function() {
  it('can keep track of a set of test grades', function() {
    studentList.setTestGrade('Fehrenback', 80);
    studentList.setTestGrade('Ingram', 90);

    expect(studentList.getTestGrade('Fehrenback')).equals(80);
    expect(studentList.getTestGrade('Ingram')).equals(90);

    expect(studentList.listGrades()).equals(
      'Ingram (grade: 90) -> Fehrenback (grade: 80)');
  });

  it('can update test grades', function() {
    studentList.setTestGrade('Fehrenback', 100);
    studentList.setTestGrade('Ingram', 95);

    expect(studentList.getTestGrade('Fehrenback')).equals(100);
    expect(studentList.getTestGrade('Ingram')).equals(95);

    expect(studentList.listGrades()).equals(
      'Ingram (grade: 95) -> Fehrenback (grade: 100)');
  });
});
