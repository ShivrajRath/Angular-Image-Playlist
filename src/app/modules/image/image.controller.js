/**
 * @namespace ImageCtrl
 * @memberof Controllers
 * @description Image Controller. Gets data from ImageService
 * @author ShivrajRath
 */
(function () {
  'use strict';

  module.exports = function ($scope, ImageService) {

    // imgId would be passed in the URL
    $scope.image = ImageService.getImage();
  };

})();
