'use strict';

var expect = require('chai').expect;
var Container = require('../lib/container');

describe('Container', function() {
  it('can clear all elements in a container', function() {
    expect(new Container().
      pushFront('foo').
      pushBack('bar').
      clear().
      empty()).equals(true);
  });
});
