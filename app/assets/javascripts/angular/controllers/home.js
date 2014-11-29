'use strict';
angular.module('elCocoLocoApp')
  .controller('HomeCtrl', ['$scope', function($scope) {
    // Make a service that gets the slides
    // Rewrite this later
    $scope.slideInterval = 3000;
    $scope.slides = [];
    var slide1 = {
      name: 'chicharrones'
    };

    var slide2 = {
      name: 'juice'
    };

    var slide3 = {
      name: 'tostones'
    };

    var slide4 = {
      name: 'pastelitos'
    };

    var slide5 = {
      name: 'arepas'
    };

    var slide6 = {
      name: 'empanadas'
    };

    $scope.slides.push(slide1, slide2, slide3, slide4, slide5, slide6);

    $scope.highlights = ['1', '2', '3', '4'];

  }]);
