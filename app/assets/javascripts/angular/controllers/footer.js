'use strict';
angular.module('elCocoLocoApp')
  .controller('FooterCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('/api/menu').success(function(menu) {
        $scope.menuCategories = menu.map(function (menuItem) {
          console.log(menuItem.type);
          return menuItem.type;
        });
      }).error(function(data, status) {
        return data;
      });
  }]);
