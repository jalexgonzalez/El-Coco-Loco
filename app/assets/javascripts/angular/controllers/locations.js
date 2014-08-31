'use strict';
angular.module('elCocoLocoApp')
  .controller('LocationCtrl', ['$scope', function($scope) {
    // Make a service that gets the slides
    // Rewrite this later
    $scope.locations = [
      {
        name: 'Bird Road',
        address: {
          number: 656,
          street: 'Bird Rd.',
          city: 'Miami',
          state: 'FL',
          zip: 33134
        },
        hours: [
          {
            day: 'Monday',
            open: '7',
            close: '9'
          }
        ],
        contact: '786-564-4956'
      },
      {
        name: 'Flagler Road',
        address: {
          number: 656,
          street: 'Flagler Rd.',
          city: 'Miami',
          state: 'FL',
          zip: 33134
        },
        hours: [
          {
            day: 'Monday',
            open: '7',
            close: '9'
          }
        ],
        contact: '786-564-4956'
      }
    ];

  }]);
