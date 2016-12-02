'use strict';

describe('Filter: duration', function () {

  // load the filter's module
  beforeEach(module('recipesApp'));

  // initialize a new instance of the filter before each test
  var duration;
  beforeEach(inject(function ($filter) {
    duration = $filter('duration');
  }));

  it('should suffix the input with minuets if input less than 60', function () {
    var input = 59;
    expect(duration(input)).toBe(input + " minutes");
  });

  it('should suffix the input with hours if input is exact mutiple of 60', function () {
    var input = 120;
    expect(duration(input)).toBe(2 + " hours");
  });

  it('should turn minutes into hours and minutes', function () {
    var input = 130;
    expect(duration(input)).toBe("2 hours and 10 minutes");
  });


});
