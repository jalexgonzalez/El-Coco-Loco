'use strict';
angular.module('elCocoLocoApp')
  .controller('FooterCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('/api/menu').success(function(menu) {
        $scope.menuCategories = menu.map(function (menuItem) {
          return {name: menuItem.name, type: menuItem.type};
        });
      }).error(function(data, status) {
        return data;
      });
  }]);
