'use strict';
angular.module('elCocoLocoApp')
  .controller('MenuCtrl', ['$scope', function($scope) {

    $scope.menuCategories = [
      'all',
      'pork',
      'beef',
      'chicken',
      'fish',
      'sandwich',
      'juice',
      'helado'
    ];

  }]);
