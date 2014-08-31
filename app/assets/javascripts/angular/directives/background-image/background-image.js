angular.module('elCocoLocoApp')
.directive('backgroundImage', [function() {
	var link = function(scope, attrs, element) {
		attrs.$observe('backgroundImg', function(value) {
            element.css({
                'background-image': 'url(' + value +')',
                'background-size' : 'cover',
                'background-position': 'center center'
            });
        });
	};

	return {
		link: link,
		scope: {
			backgroundImg: '@'
		},
		restrict: 'A'
	};
}]);