'use strict';
angular.module('elCocoLocoApp')
  .controller('MenuCtrl', ['$scope', 'menuPromise', function($scope, menuPromise) {

    $scope.menuCategories = [
      'pork',
      'beef',
      'chicken',
      'fish',
      'sandwich',
      'juice',
      'helado'
    ];

    $scope.menu = menuPromise.data;

  }]);
