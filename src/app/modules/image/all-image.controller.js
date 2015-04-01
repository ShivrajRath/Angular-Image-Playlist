/**
 * @namespace AllImageCtrl
 * @memberof Controllers
 * @description AllImage Controller. Displays all the images added in a playlist
 * @author ShivrajRath
 */

(function () {
  'use strict';

  module.exports = function ($scope, $stateParams, PlaylistService, ImageService, $rootScope) {

    var playlistId = $stateParams.playlistId,
      imageIds,
      playlist = PlaylistService.getPlaylist(playlistId);

    $scope.images = [];

    $scope.fetchImage = function () {
      imageIds = playlist.getAllImages();

      imageIds.forEach(function (imageId) {
        $scope.images.push(ImageService.getImage(imageId));
      });
    };

    $rootScope.$on('image-added', function (evt, image) {
      if(evt && image){
        $scope.images.push(image); 
      }
    });

    $scope.fetchImage();

  };
})();