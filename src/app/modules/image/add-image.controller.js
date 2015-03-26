/**
 * @namespace AddImageCtrl
 * @memberof Controllers
 * @description AddImage Controller. Adds a new image to a ImageService and adds a reference to PlaylistService
 * @author ShivrajRath
 */
(function () {
  'use strict';

  module.exports = function ($scope, $stateParams/**, PlaylistService, ImageService**/) {
    $scope.playlistId = $stateParams.playlistId;
  };
})();
