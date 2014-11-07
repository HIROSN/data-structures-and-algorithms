'use strict';

module.exports = function(heap) {
  return {
    patientEntry: function(name, code) {
      heap.push(name, code);
    },

    seenByDoctor: function() {
      var name = heap.front();
      heap.pop();
      return name;
    },

    listPatientsWaiting: function() {
      return heap.toString();
    }
  };
};
