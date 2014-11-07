'use strict';

module.exports = function(list) {
  var StudentRecord = function(name, grade) {
    this.name = name;
    this.grade = grade;
  };

  StudentRecord.prototype.toString = function() {
    return this.name + ' (grade: ' + this.grade + ')';
  };

  return {
    setTestGrade: function(name, grade) {
      this.getTestGrade(name);

      if (list.current()) {
        list.current().grade = grade;
        return this;
      }

      list.insert(new StudentRecord(name, grade));
      return this;
    },

    getTestGrade: function(name) {
      list.reset();

      for (list.advance(); list.current(); list.advance()) {
        if (list.current().name === name) {
          return list.current().grade;
        }
      }

      return null;
    },

    listGrades: function() {
      return list.toString();
    }
  };
};
