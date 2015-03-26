/**
 * @namespace AllPlaylistCtrl
 * @memberof Controllers
 * @description List all added Playlist
 * @author ShivrajRath
 */
(function () {
  'use strict';

  module.exports = function ($scope, PlaylistService) {
    $scope.playlists = PlaylistService.readAllPlaylists();
  };

})();
