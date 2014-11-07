'use strict';

var expect = require('chai').expect;
var Heap = require('../lib/heap');
var activities = require('../exercises/exercise_5_4');

describe('Exercise 5.4', function() {
  it('is a menu system', function() {
    var minHeap = new Heap();
    var menu = activities(minHeap);

    menu.patientEntry('Smith', 5);
    menu.patientEntry('Jones', 4);
    menu.patientEntry('Fehrenbach', 6);
    menu.patientEntry('Brown', 1);
    menu.patientEntry('Ingram', 1);

    expect(menu.listPatientsWaiting()).equals(
      'Smith [5], Jones [4], Fehrenbach [6], Brown [1], Ingram [1]');

    expect(menu.seenByDoctor()).equals('Brown');

    expect(menu.listPatientsWaiting()).equals(
      'Smith [5], Jones [4], Fehrenbach [6], Ingram [1]');

    expect(menu.seenByDoctor()).equals('Ingram');

    expect(menu.listPatientsWaiting()).equals(
      'Smith [5], Jones [4], Fehrenbach [6]');

    expect(menu.seenByDoctor()).equals('Jones');

    expect(menu.listPatientsWaiting()).equals(
      'Smith [5], Fehrenbach [6]');
  });
});
