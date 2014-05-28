window.elCocoLocoApp = angular.module('elCocoLocoApp',
  ['ngResource', 'ui.router', 'ngStorage', 'ui.bootstrap'])
  .config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
    ($stateProvider, $locationProvider, $urlRouterProvider) ->
      $stateProvider
        # States for El Coco Loco
        .state('home',
          url: '/home'
          templateUrl: '/templates/home'
          controller: 'HomeCtrl'
        )

        # State for menus, all and selected
        .state('menu',
          url: '/menu',
          templateUrl: '/templates/menu'
          controller: 'MenuCtrl'
        )
        .state('menu.type',
          url: '/:type',
          templateUrl: '/templates/menu'  # Make own template
          controller: 'MenuTypeCtrl'
        )

        # State for locations, all and selected
        .state('locations',
          url: '/locations',
          templateUrl: '/templates/locations'
          controller: 'LocationCtrl'
        )
        .state('locations.store',
          url: '/:store'
          templateUrl: '/templates/locations'  # Make own template
          controller: 'StoreCtrl'
        )

        # Specials
        .state('specials',
          url: '/specials',
          templateUrl: '/templates/specials'
          controller: 'SpecialsCtrl'
        )

        
        ###############################################
        # Admin States - need to make this abstract
        # Add login, logout, and editting routes later
        ###############################################
        .state('admin',
          url: '/admin'
          templateUrl: '/templates/admin'
          controller: 'AdminCtrl'
        )

      $locationProvider.html5Mode(true)      # Allows hashtag routing
      $urlRouterProvider.otherwise('/home')
  ])

  .run(['$rootScope', ($rootScope) ->
    elCocoLocoApp.apiPrefix = '/api/v1'  # Global api route
  ])
