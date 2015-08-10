window.elCocoLocoApp = angular.module('elCocoLocoApp',
  ['ngResource', 'ui.router', 'ngStorage', 'ui.bootstrap', 'AngularGM', 'ngResource', 'ui.scrollpoint'])
  .config(['$stateProvider', '$locationProvider', '$urlRouterProvider',
  'USER_ROLES', function($stateProvider, $locationProvider,
  $urlRouterProvider, USER_ROLES) {
    $stateProvider.state('home', {
      url: '/',
      templateUrl: '/templates/home',
      controller: 'HomeCtrl',
      data: {
        authorizedRoles: [USER_ROLES.all]
      }
    }).state('about', {
      url: '/about',
      templateUrl: '/templates/about',
      data: {
        authorizedRoles: [USER_ROLES.all]
      }
    }).state('login', {
      url: '/login',
      templateUrl: '/templates/login',
      data: {
        authorizedRoles: [USER_ROLES.all]
      }
    }).state('menu', {
      url: '/menu',
      templateUrl: '/templates/menu',
      controller: 'MenuCtrl',
      data: {
        authorizedRoles: [USER_ROLES.all]
      },
      resolve: {
        menuPromise: ['$http', function($http) {
          return $http.get('/api/menu').
            success(function(menu) {
              return menu;
            }).
            error(function(data, status) {
              return data;
            });
        }]
      }
    }).state('menu.type', {
      url: '/:type',
      // templateUrl: '/templates/menu.type',
      controller: 'MenuTypeCtrl',
      data: {
        authorizedRoles: [USER_ROLES.all]
      }
    }).state('locations', {
      url: '/locations',
      templateUrl: '/templates/locations',
      controller: 'LocationCtrl',
      data: {
        authorizedRoles: [USER_ROLES.all]
      }
    }).state('locations.store', {
      url: '/:store',
      templateUrl: '/templates/locations.store',
      data: {
        authorizedRoles: [USER_ROLES.all]
      }
    }).state('specials', {
      url: '/specials',
      templateUrl: '/templates/specials',
      controller: 'SpecialsCtrl',
      data: {
        authorizedRoles: [USER_ROLES.all]
      }
    }).state('admin', {
      url: '/admin',
      templateUrl: '/templates/admin',
      controller: 'AdminCtrl',
      data: {
        authorizedRoles: [USER_ROLES.admin]
      }
    });
    $locationProvider.html5Mode(true);
    return $urlRouterProvider.otherwise('/');
  }]).run(['$rootScope', 'AuthService', 'AUTH_EVENTS',
    function($rootScope, AuthService, AUTH_EVENTS) {
    elCocoLocoApp.apiPrefix = '/api/v1';
    $(document).on('click.nav', '.navbar-collapse.in', function(e) {
      if ($(e.target).is('a') || $(e.target).is('button')) {
        return $(this).collapse('hide');
      }
    });
    $(document).on('click.nav', '.navbar-brand', function() {
      var navbar_collapse;
      navbar_collapse = $('.navbar-collapse');
      if (navbar_collapse.is(':visible')) {
        return navbar_collapse.collapse('hide');
      }
    });
    $rootScope.$on('$stateChangeStart', function (event, next) {
      var authorizedRoles = next.data.authorizedRoles;
      $('#topcontrol').removeClass('visible');
      if (!AuthService.isAuthorized(authorizedRoles)) {
        // event.preventDefault();
        if (AuthService.isAuthenticated()) {
          // user is not allowed
          $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
        } else {
          // user is not logged in
          $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
        }
      }
    });
  }]);
