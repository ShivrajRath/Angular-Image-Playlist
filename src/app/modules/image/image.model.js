/**
 * @namespace ImageModel
 * @memberof Models
 * @description Image Model. Creates a new Image and adds it to the image list.
 * @author ShivrajRath
 */
(function () {
  'use strict';

  module.exports = function () {
    var ImageModel = function (imgObj) {
      if (imgObj) {
        this.setData(imgObj);
      }
    };

    ImageModel.prototype = {
      setData: function (imgData) {
        angular.extend(this, imgData);
      },
      deleteImage: function (imgId) {

      },
      updateImage: function (imgId, imageObj) {

      }
    };
  };
})();
