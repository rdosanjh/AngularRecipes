'use strict';

/**
 * @ngdoc service
 * @name recipesApp.seedData
 * @description
 * # seedData
 * Service in the recipesApp.
 */
angular.module('recipesApp')
  .service('seeddata', function () {
    var service = {
      getSeedRecipes: getSeedRecipes
    }
    function getSeedRecipes() {
      return [
        {
          title: "Cranberry & orange Chelsea bun tree",
          picURL: "http://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/10/cranberry-chelsea-bun-tree.jpg?itok=U396C9AH",
          ingredients: [
            {
              name: "strong white bread flour",
              quantity: "450g"
            },
            {
              name: " full-fat milk",
              quantity: "275 ml"
            },

          ],
          difficulty: Math.ceil(Math.random() * 5),
          duration: 40 + Math.ceil(Math.random() * 30),
          method: generateDummyText(),
          timeAdded: Date.now()
        },
        {
          title: "Chocolate & cherry Christmas pudding",
          picURL: "http://www.bbcgoodfood.com/sites/default/files/styles/teaser_item/public/recipe/recipe-image/2016/10/cherry-chocolate-pudding.jpg?itok=EwEcst-M",
          ingredients: [
            {
              name: "strong white bread flour",
              quantity: "450g"
            },
            {
              name: " full-fat milk",
              quantity: "275 ml"
            },

          ],
          difficulty: Math.ceil(Math.random() * 5),
          duration: 40 + Math.ceil(Math.random() * 30),
          method: generateDummyText(),
          timeAdded: Date.now()
        },
        {
          title: "Baileys custard tart",
          picURL: "http://www.bbcgoodfood.com/sites/default/files/styles/teaser_item/public/recipe/recipe-image/2016/10/baileys-custard-tart.jpg?itok=SwjjJ8SY",
          ingredients: [
            {
              name: "strong white bread flour",
              quantity: "450g"
            },
            {
              name: " full-fat milk",
              quantity: "275 ml"
            },

          ],
          difficulty: Math.ceil(Math.random() * 5),
          duration: 40 + Math.ceil(Math.random() * 30),
          method: generateDummyText(),
          timeAdded: Date.now()
        },
      ];
    };

    function generateDummyText() {
      var text = "";
      for (var i = 0; i < 20; ++i) {
        text += "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ";
      }
      return text;
    }

    return service;
  });
