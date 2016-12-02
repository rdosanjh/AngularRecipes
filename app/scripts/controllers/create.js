'use strict';

/**
 * @ngdoc function
 * @name recipesApp.controller:CreateCtrl
 * @description
 * # CreateCtrl
 * Controller of the recipesApp
 */
angular.module('recipesApp')
  .controller('CreateCtrl', function (recipie, $location) {
    var _this = this;
    _this.recipe = {
      ingredients: [{}]
    };
    _this.addIngredient = function (){
      _this.recipe.ingredients.push({});
    }

    _this.removeIngredient = function (index){
      _this.recipe.ingredients.splice(index, 1);
    }

    _this.save = function(){
      _this.recipe.timeAdded = Date.now();
      recipie.add(_this.recipe);
      $location.path("/view/" + this.recipe.title);
    }
  });
