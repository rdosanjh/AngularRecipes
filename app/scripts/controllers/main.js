'use strict';

/**
 * @ngdoc function
 * @name recipesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the recipesApp
 */
angular.module('recipesApp')
  .controller('MainCtrl', function (recipie) {
    var _this = this;
    _this.sort = "title";
    _this.recipes = recipie.getAll();
    _this.sortChanged = function (){
      _this.recipes = _this.recipes.sort(function(recipe1, recipe2){
        if(recipe2[_this.sort] <  recipe1[_this.sort]) return -1;
        if(recipe2[_this.sort] >  recipe1[_this.sort]) return 1;
        return 0;
      });
    }
  });
