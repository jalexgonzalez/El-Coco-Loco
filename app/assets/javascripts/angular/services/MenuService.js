angular.module('elCocoLocoApp')
.factory('Menu', ['$resource', function ($resource) {
  return $resource('/api/menu', {}, {
  });
}]);