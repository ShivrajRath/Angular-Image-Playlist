/**
 * @namespace modules
 * @description Contains defination of all angular modules
 * @author ShivrajRath
 */
(function () {
  'use strict';
  var app = require('angular').module('angularTemplate');

  /**
   * Module Injection via Browserify
   */
  app.controller('MainCtrl', require('./main/main.controller'));
  app.controller('StateManagementCtrl', require('./statemanagement/statemanagement.controller'));

  // Image Module
  app.controller('ImageCtrl', require('./image/image.controller'));
  app.factory('ImageModel', require('./image/image.model'));
  app.factory('ImageService', require('./image/image.service'));

  // Playlist Module
  app.controller('PlaylistCtrl', require('./playlist/playlist.controller'));
  app.factory('PlaylistModel', require('./playlist/playlist.model'));
  app.factory('PlaylistService', require('./playlist/playlist.service'));

})();
