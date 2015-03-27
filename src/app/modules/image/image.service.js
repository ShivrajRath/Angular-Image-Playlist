/**
 * @namespace ImageService
 * @memberof Services
 * @description Image Service. All operation on images controller here.
 * @author ShivrajRath
 */
var _ = require('lodash');

(function () {
  'use strict';

  module.exports = function (ImageModel, UtilityFactory) {
    var ImageService = {

      // Private member variables and functions
      _imagelist: {},

      /**
       * Adds a image object to imagelist queue
       * @param {Object} imagelist
       */
      _addToImagelistQueue: function (image) {
        if (image && image.imageId) {
          this._imagelist[image.imageId] = image;
        } else {
          throw new Error('imgObj is not correct. Does not contain a imageId');
        }
      },

      /**
       * Retrieves an image object, if not present creates it
       * @param {Object} imgObj
       */
      _retrieveImageInstance: function (imgObj) {
        var image;

        if (imgObj.imageId) {
          image = new ImageModel(imgObj);
          this._addToImagelistQueue(image);
        } else if (imgObj && imgObj.name) {
          this._generateImageId(imgObj);
          image = new ImageModel(imgObj);
          this._addToImagelistQueue(image);
        } else {
          throw new Error('imgObj is not correct');
        }

        return image;

      },

      /**
       * Generates imageId for a imagelist object
       */
      _generateImageId: function (imgObj) {
        imgObj.imageId = UtilityFactory.randomString(4) + '_Imagelist_' + new Date().getTime();
      },

      /************************** Public Methods **************************/

      /**
       * Creates a new image
       * @param   {[[Object]]} imgObj Raw image object
       * @returns {[[Object]]} Image Instance
       */
      addImage: function (imgObj) {
        return this._retrieveImageInstance(_.cloneDeep(imgObj));
      },

      /**
       * Returns an Image Instance
       * @param   {[[string]]} imageId
       * @returns {[[Object]]} [[Image Object]]
       */
      getImage: function (imageId) {
        if (imageId) {
          return this._imagelist[imageId];
        } else {
          throw new Error('imageId not found');
        }
      }
    };
    return ImageService;
  };

})();
