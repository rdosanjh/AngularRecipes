'use strict';

/**
 * @ngdoc service
 * @name recipesApp.shoppingList
 * @description
 * # shoppingList
 * Service in the recipesApp.
 */
angular.module('recipesApp')
  .service('shoppingList', function ($window) {
    var service = {
      addToShoppingList: addToShoppingList,
      getShoppingList: getShoppingList,
      removeFromShoppingList: removeFromShoppingList,
      isOnShoppingList: isOnShoppingList,
      removeByRecipie: removeByRecipie
    };

    function addToShoppingList(recipe, items) {
      if (amountOfRecipesInList() > 4) {
        alert("There are too many items")
        return false;
      }
      localStorage.setItem("list_" + recipe, JSON.stringify({ recipe: recipe, items: items }));
      return true;
    }

    function amountOfRecipesInList() {
      var amount = 0;
      for (var i = 0, len = $window.localStorage.length; i < len; ++i) {
        if ($window.localStorage.key(i).indexOf("list_") > -1) {
          amount++;
        }
      }
      return amount;
    }

    function getShoppingList() {
      var list = [];
      for (var i = 0, len = $window.localStorage.length; i < len; ++i) {
        if ($window.localStorage.key(i).indexOf("list_") > -1) {
          list.push(JSON.parse($window.localStorage.getItem($window.localStorage.key(i))))
        }
      }
      return list;
    }

    function removeFromShoppingList(recipe, name) {
      var items = JSON.parse($window.localStorage.getItem("list_" + recipe));
      var itemsToAdd = items.items.filter(function (item) {
        return item.name !== name
      })
      removeByRecipie(recipe);
      if (itemsToAdd.length > 0) {
        addToShoppingList(recipe, itemsToAdd);
      }
    }

    function removeByRecipie(recipe) {
      $window.localStorage.removeItem("list_" + recipe);
    }

    function isOnShoppingList(recipe) {
      for (var i = 0, len = $window.localStorage.length; i < len; ++i) {
        if ($window.localStorage.key(i) === "list_" + recipe) {
          return true;
        }
      }
      return false;
    }

    return service;
  });
