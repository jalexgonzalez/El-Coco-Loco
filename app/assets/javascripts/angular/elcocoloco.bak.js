// window.elCocoLocoApp = angular.module('elCocoLocoApp',
//   ['ngResource', 'ui.router', 'ngStorage', 'ui.bootstrap', 'AngularGM'])
//   .config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
//   'USER_ROLES', ($stateProvider, $locationProvider, $urlRouterProvider,
//   USER_ROLES) ->
//       $stateProvider
//         # States for El Coco Loco
//         .state('home',
//           url: '/'
//           templateUrl: '/templates/home'
//           controller: 'HomeCtrl'
//         )
//         # State for about
//         .state('about',
//           url: '/about',
//           templateUrl: '/templates/about'
//         )
//         .state('login',
//           url: '/login'
//           templateUrl: '/templates/login'
//           #controller: 'HomeCtrl'
//         )
//         # State for menus, all and selected
//         .state('menu',
//           url: '/menu',
//           templateUrl: '/templates/menu'
//           controller: 'MenuCtrl'
//         )
//         .state('menu.type',
//           url: '/:type',
//           templateUrl: '/templates/menu.type'  # Make own template
//           controller: 'MenuTypeCtrl'
//         )

//         # State for locations, all and selected
//         .state('locations',
//           url: '/locations',
//           templateUrl: '/templates/locations'
//           controller: 'LocationCtrl'
//         )
//         .state('locations.store',
//           url: '/:store'
//           templateUrl: '/templates/locations.store'  # Make own template
//           #controller: 'StoreCtrl'
//         )

//         # Specials
//         .state('specials',
//           url: '/specials',
//           templateUrl: '/templates/specials'
//           controller: 'SpecialsCtrl'
//         )


//         ###############################################
//         # Admin States - need to make this abstract
//         # Add login, logout, and editting routes later
//         ###############################################
//         .state('admin',
//           url: '/admin'
//           templateUrl: '/templates/admin'
//           controller: 'AdminCtrl'
//           data:
//             authorizedRoles: [USER_ROLES.admin]
//         )

//       $locationProvider.html5Mode(true)      # Allows hashtag routing
//       $urlRouterProvider.otherwise('/')
//   ])

//   .run(['$rootScope', ($rootScope) ->
//     elCocoLocoApp.apiPrefix = '/api/v1'  # Global api route

//     $(document).on('click.nav','.navbar-collapse.in', (e) ->
//       if $(e.target).is('a') or $(e.target).is('button')
//         $(this).collapse('hide')
//     )

//     $(document).on('click.nav','.navbar-brand', () ->
//       navbar_collapse = $('.navbar-collapse')
//       if navbar_collapse.is(':visible')
//           navbar_collapse.collapse('hide')
//     )
//   ])
