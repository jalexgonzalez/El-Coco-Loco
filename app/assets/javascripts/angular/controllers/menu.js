'use strict';
angular.module('elCocoLocoApp')
  .controller('MenuCtrl', ['$scope', 'menuPromise', function ($scope, menuPromise) {

    $scope.menu = menuPromise.data;
    $scope.menuCategories = menuPromise.data.map(function (menuItem) {
      return {name: menuItem.name, type: menuItem.type};
    });

    $('#topcontrol').addClass('visible');

  }]);
