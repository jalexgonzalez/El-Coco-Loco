'use strict';
angular.module('elCocoLocoApp')
  .controller('HomeCtrl', ['$scope', function($scope) {
    // Make a service that gets the slides
    // Rewrite this later
    $scope.slideInterval = 5000;
    $scope.slides = [];
    var slide1 = {
      name: 'cuba'
    };

    var slide2 = {
      name: 'venezuela'
    };

    var slide3 = {
      name: 'colombia'
    };

    var slide4 = {
      name: 'nicaragua'
    };

    $scope.slides.push(slide1, slide2, slide3, slide4);

    $scope.highlights = ['1', '2', '3', '4'];

  }]);
