/*
 * @namespace AppRoutes
 * @memberof app
 * @description Defines application routes
 * @author ShivrajRath
 */
(function () {
  'use strict';

  var app = require('angular').module('angularTemplate');
  app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    // Home Route
      .state('home', {
        url: '/',
        templateUrl: './app/modules/main/main.html',
        controller: 'MainCtrl'
      })
      // Team members Route
      .state('teammembers', {
        url: '/teammembers',
        templateUrl: './app/modules/teammembers/teammembers.html',
        controller: 'TeamMembersCtrl'
      })
      // State management Route
      .state('statemanagement', {
        url: '/statemanagement',
        templateUrl: './app/modules/statemanagement/statemanagement.html',
        controller: 'StateManagementCtrl'
      })
      .state('state1', {
        url: '/state1',
        templateUrl: './app/modules/statemanagement/state1.html'
      })
      .state('state1.1', {
        url: '/state1.1',
        views: {
          'view1': {
            templateUrl: './app/modules/statemanagement/state1.1a.html'
          },
          'view2': {
            templateUrl: './app/modules/statemanagement/state1.1b.html'
          }
        }
      })
      .state('state1.2', {
        url: '/state1.2',
        views: {
          'view1': {
            templateUrl: './app/modules/statemanagement/state1.2a.html'
          },
          'view2': {
            templateUrl: './app/modules/statemanagement/state1.2b.html'
          }
        }
      })
      .state('state2', {
        url: '/state2',
        templateUrl: './app/modules/statemanagement/state2.html'
      })
      .state('state2.1', {
        url: '/state2.1',
        templateUrl: './app/modules/statemanagement/state2.1.html'
      })
      .state('state2.2', {
        url: '/state2.2',
        templateUrl: './app/modules/statemanagement/state2.2.html'
      });

    $urlRouterProvider.otherwise('/');
  });
})();
