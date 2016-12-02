'use strict';

/**
 * @ngdoc function
 * @name recipesApp.controller:ViewCtrl
 * @description
 * # ViewCtrl
 * Controller of the recipesApp
 */
angular.module('recipesApp')
  .controller('ViewCtrl', function ($routeParams, recipie, shoppingList) {
    var _this = this;
    _this.recipe = recipie.getByTitle($routeParams.title)

    _this.onList = shoppingList.isOnShoppingList($routeParams.title);

    _this.addToShoppingList = function () {
      if (shoppingList.addToShoppingList($routeParams.title, _this.recipe.ingredients)) {
        _this.onList = true;
      }
    }

    _this.removeByRecipie = function () {
      shoppingList.removeByRecipie($routeParams.title);
      _this.onList = false;
    }
  });
