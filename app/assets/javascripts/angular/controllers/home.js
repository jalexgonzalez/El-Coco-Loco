'use strict';
angular.module('elCocoLocoApp')
  .controller('HomeCtrl', ['$scope', function($scope) {
    // Make a service that gets the slides
    // Rewrite this later
    $scope.slideInterval = 5000;
    $scope.slides = [];

    var slide1 = {
      name: 'coconuts'
    };

    var slide2 = {
      name: 'espuma'
    };

    var slide3 = {
      name: 'icecream'
    };

    var slide4 = {
      name: 'chicharrones'
    };

    var slide5 = {
      name: 'oranges'
    };

    $scope.slides.push(slide1, slide2, slide3, slide4, slide5);

    $scope.highlights = [
      {text: 'Low Carb Friendly Menu', sref: 'menu'},
      {text: 'Homemade Premium Ice Cream & Sorbet', sref: 'menu'},
      {text: 'Find The Nearest Location', sref: 'locations'},
      {text: 'Open Daily from 6:30am to 10pm', sref: 'locations'}
    ];

  }]);
