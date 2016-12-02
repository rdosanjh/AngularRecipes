'use strict';

/**
 * @ngdoc filter
 * @name recipesApp.filter:duration
 * @function
 * @description
 * # duration
 * Filter in the recipesApp.
 */
angular.module('recipesApp')
  .filter('duration', function () {
    return function (input) {
      var hours = input / 60
      if(hours < 1){
        return input + " minutes"
      }

      var formatted = Math.floor(hours) + " hours"
      var mins = input % (Math.floor(hours) * 60);
      if(mins === 1) {
        formatted += " and " + mins + " minute"
      }
      if(mins > 1) {
        formatted += " and " + mins + " minutes"
      }
      return formatted;
    };
  });
