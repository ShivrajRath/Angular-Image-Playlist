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
  app.controller('AddImageCtrl', require('./image/add-image.controller'));
  app.factory('ImageModel', require('./image/image.model'));
  app.factory('ImageService', require('./image/image.service'));

  // Playlist Module
  app.controller('EditPlaylistCtrl', require('./playlist/edit-playlist.controller'));
  app.controller('CreatePlaylistCtrl', require('./playlist/create-playlist.controller'));
  app.controller('AllPlaylistCtrl', require('./playlist/all-playlist.controller'));
  app.factory('PlaylistModel', require('./playlist/playlist.model'));
  app.factory('PlaylistService', require('./playlist/playlist.service'));

})();
