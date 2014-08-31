angular.module('elCocoLocoApp')
.directive('menuItem', [function() {
	return {
		restrict: 'E',
		scope: {
			icon: '@',
			caption: '@',
			category: '@'
		},
		templateUrl: '/templates/directives/menu-item.html'
	};
}]);