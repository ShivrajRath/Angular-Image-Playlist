/**
 * @namespace CreatePlaylistCtrl
 * @memberof Controllers
 * @description Create Playlist Controller. Gets data from PlaylistService and binds it to create-playlist.html
 * @author ShivrajRath
 */
(function () {
  'use strict';

  module.exports = function ($scope, PlaylistService) {
    $scope.playlist = {};

    $scope.createPlaylist = function () {

      PlaylistService.createPlaylist($scope.playlist);

      $scope.playlist = {};
    };
  };

})();
