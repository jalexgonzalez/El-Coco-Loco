'use strict';
angular.module('elCocoLocoApp')
  .controller('MenuTypeCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
    $scope.filterType = $stateParams.type;
    $scope.filterName = $stateParams.type;

    $scope.$watch(function() { return $stateParams.type },
      function(newValue, oldValue) {
        $scope.filterType = newValue;
        $scope.filterName = newValue;
      }
     );
  }]);
