'use strict';

/**
 * @ngdoc function
 * @name recipesApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the recipesApp
 */
angular.module('recipesApp')
  .controller('ListCtrl', function (shoppingList) {
    var _this = this;
    function populateList(){
      _this.list = shoppingList.getShoppingList();

    };
    populateList();

    _this.removeByRecipe = function (recipe) {
      shoppingList.removeByRecipie(recipe);
      populateList();
    }

    _this.removeByItem = function (recipe, name) {
      shoppingList.removeFromShoppingList(recipe, name);
      populateList();
    }
  });
