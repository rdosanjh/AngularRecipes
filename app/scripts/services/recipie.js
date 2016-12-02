'use strict';

/**
 * @ngdoc service
 * @name recipesApp.recipie
 * @description
 * # recipie
 * Service in the recipesApp.
 */
angular.module('recipesApp')
  .service('recipie', function ($window, seeddata) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var service = {
      add: add,
      getAll: getAll,
      getByTitle: getByTitle
    };

    seeddata.getSeedRecipes()
      .forEach(add);

    function add(recipe) {
      var name = 'recipe_' + recipe.title;
      if ($window.localStorage.getItem(name)) {
        return;
      }
      $window.localStorage.setItem(name, JSON.stringify(recipe));
    }

    function getByTitle(title) {
      for (var i = 0, len = $window.localStorage.length; i < len; ++i) {
        if ($window.localStorage.key(i) === "recipe_" + title) {
          return JSON.parse($window.localStorage.getItem($window.localStorage.key(i)));
        }
      }
    }

    function getAll() {
      var recipe = [];
      for (var i = 0, len = $window.localStorage.length; i < len; ++i) {
        if ($window.localStorage.key(i).indexOf("recipe_") > -1) {
          recipe.push(JSON.parse($window.localStorage.getItem($window.localStorage.key(i))));
        }
      }
      return recipe;
    }

    return service;
  });
