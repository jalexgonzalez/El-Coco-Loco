'use strict';
angular.module('elCocoLocoApp')
  .controller('MenuCtrl', ['$scope', function($scope) {

    $scope.menuCategories = [
      'pork',
      'beef',
      'chicken',
      'fish',
      'sandwich',
      'juice',
      'helado'
    ];

  }]);
