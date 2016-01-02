'use strict';
angular.module('elCocoLocoApp')
  .controller('LocationCtrl', ['$scope', function($scope) {

    $scope.options = {
      map: {
        center: new google.maps.LatLng(25.72, -80.33),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        draggable: false,
        scrollwheel: false,
        panControl: false
      },
      notselected: {
        icon: 'https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png',
      },
      selected: {
        icon: 'https://maps.gstatic.com/mapfiles/ms2/micons/yellow-dot.png',
      }
    };

    $scope.locations = [
      {
        name: 'Bird Road',
        address: {
          number: 6420,
          street: 'Bird Rd.',
          city: 'Miami',
          state: 'FL',
          zip: 33155
        },
        latitude: 25.73328,
        longitude: -80.29913899999997,
        hours: [
          {
            day: 'Monday',
            open: '7',
            close: '10'
          }
        ],
        contact: '',
        nowOpen: true
      },
      {
        name: 'Sweetwater',
        address: {
          number: 70,
          street: 'NW 107 Ave.',
          city: 'Miami',
          state: 'FL',
          zip: 33174
        },
        latitude: 25.7700806,
        longitude: -80.36958470000002,
        hours: [
          {
            day: 'Monday',
            open: '7',
            close: '10'
          }
        ],
        contact: '',
        nowOpen: false
      }
    ];

    $scope.getStoreOpts = function(store) {
     return angular.extend(
       { title: store.name },
       store.selected ? $scope.options.selected :
          $scope.options.notselected
      );
    };

    $scope.selectStore = function(store) {
      if ($scope.store) {
        $scope.store.selected = false;
      }
      $scope.store = store;
      $scope.store.selected = true;
      $scope.options.map.center = new google.maps.LatLng(store.latitude, store.longitude),

      $scope.$broadcast('gmMarkersUpdate', 'locations');
    };

  }]);
