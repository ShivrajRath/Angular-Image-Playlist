/**
 * @namespace AddImageCtrl
 * @memberof Controllers
 * @description AddImage Controller. Adds a new image to a ImageService and adds a reference to PlaylistService
 * @author ShivrajRath
 */
(function () {
  'use strict';

  module.exports = function ($scope, $stateParams, PlaylistService, ImageService) {

    $scope.playlistId = $stateParams.playlistId;
    $scope.image = {};

    $scope.addImage = function () {
      var image = ImageService.addImage($scope.image);

      if (image.imageId) {
        var playlist = PlaylistService.getPlaylist(this.playlistId);

        if (playlist) {
          playlist.addImage(image.imageId);

          //Clear the fields
          $scope.image = {};
        }
      }
    };

  };
})();
