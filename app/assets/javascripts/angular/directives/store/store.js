'use strict';

angular.module('elCocoLocoApp')
  .directive('store', [function () {
    return {
      templateUrl: '/templates/directives/store.html',
      restrict: 'E',
      replace: true,
      scope: {
          // name: '@',
          // addr: '=',
          // hours: '=',
          // contact: '@'
          store: '='
      },
      transclude: true
    };
  }]);
