'use strict';

/**
 * @ngdoc directive
 * @name recipesApp.directive:recipePreview
 * @description
 * # recipePreview
 */
angular.module('recipesApp')
  .directive('recipePreview', function () {
    return {
      templateUrl: "views/recipePreview.html",
      restrict: 'E',
      scope: {
        recipie: "="
      }
    };
  });
