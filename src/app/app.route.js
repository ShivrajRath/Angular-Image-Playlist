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
      .state('templateA', {
        abstract: true,
        templateUrl: './app/common/templates/two-col-50p.html'
      })
      .state('templateB', {
        abstract: true,
        templateUrl: './app/common/templates/two-col-75p-25p.html'
      })
      .state('templateB.home', {
        url: '/',
        views: {
          // Header needs to be cleaned up
          'header': {
            template: '<h1>{{title}}</h1>',
            controller: function ($scope) {
              $scope.title = 'Home';
            }
          },
          'col1': {
            'templateUrl': './app/modules/playlist/create-playlist.html',
            controller: 'CreatePlaylistCtrl'
          },
          'col2': {
            'templateUrl': './app/modules/playlist/all-playlist.html',
            controller: 'AllPlaylistCtrl'
          }
        }
      })
      .state('templateA.addImage', {
        url: '/addImage/:playlistId',
        views: {
          // Header needs to be cleaned up
          'header': {
            template: '<h1>{{title}}</h1>',
            controller: function ($scope) {
              $scope.title = 'Add Image';
            }
          },
          'col1': {
            'templateUrl': './app/modules/image/add-image.html',
            controller: 'AddImageCtrl'
          },
          'col2': {
            'templateUrl': './app/modules/image/all-image.html',
            controller: 'AllImageCtrl'
          }
        }
      })

    // Create Playlist Route
    .state('create-playlist', {
      url: '/create-playlist',
      templateUrl: './app/modules/playlist/create-playlist.html',
      controller: 'CreatePlaylistCtrl'
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