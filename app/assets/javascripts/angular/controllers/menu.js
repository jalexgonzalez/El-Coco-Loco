'use strict';
angular.module('elCocoLocoApp')
  .controller('MenuCtrl', ['$scope', 'menuPromise', function ($scope, menuPromise) {

    $scope.menu = menuPromise.data;
    $scope.menuCategories = menuPromise.data.map(function (menuItem) {
      console.log(menuItem.type);
      return menuItem.type;
    });

    $('#topcontrol').addClass('visible');

  }]);
