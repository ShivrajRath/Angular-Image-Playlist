/**
 * @namespace ImageModel
 * @memberof Models
 * @description Image Model. Creates a new Image and adds it to the image list.
 * @author ShivrajRath
 */
(function () {
  'use strict';

  module.exports = function () {

    var ImageModel = function (imageObj) {
      if (imageObj) {
        this.setData(imageObj);
      }
    };

    ImageModel.prototype = {

      setData: function (imageObj) {
        this.name = imageObj.name;
        this.url = imageObj.url;
        this.pageurl = imageObj.url;
        this.description = imageObj.description;
        this.tags = imageObj.tags;
        this.imageId = imageObj.imageId;
      },

      deleteImage: function () {

      },

      updateImage: function (imageObj) {
        this.setData(imageObj);
      }
    };

    return ImageModel;
  };
})();
