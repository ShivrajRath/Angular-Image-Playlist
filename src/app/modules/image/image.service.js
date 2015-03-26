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
      _addToimagelistQueue: function (imagelist) {
        if (imagelist && imagelist.imagelistId) {
          this._imagelist[imagelist.imagelistId] = imagelist;
        } else {
          throw new Error('imagelistObj is not correct. Does not contain a imagelistId');
        }
      },

      /**
       * Retrieves a imagelist object, if not present creates it
       * @param {Object} imagelistObj
       */
      _retrieveImagelistInstance: function (imagelistObj) {
        var imagelist;

        if (imagelistObj.imagelistId) {
          imagelist = new ImageModel(imagelistObj);
          this._addToImagelistQueue(imagelist);
        } else if (imagelistObj && imagelistObj.name) {
          this._generateImagelistId(imagelistObj);
          imagelist = new ImageModel(imagelistObj);
          this._addToImagelistQueue(imagelist);
        } else {
          throw new Error('imagelistObj is not correct');
        }

        return imagelist;

      },


      /**
       * Generates imagelistId for a imagelist object
       */
      _generateImagelistId: function (imagelistObj) {
        imagelistObj.imagelistId = UtilityFactory.randomString(4) + '_Imagelist_' + new Date().getTime();
      },

      /************************** Public Methods **************************/

      /**
       * Creates a new imagelist
       * @param   {[[Object]]} imagelistObj [[Description]]
       * @returns {[[Object]]} [[Description]]
       */
      createImagelist: function (imagelistObj) {
        return this._retrieveImagelistInstance(_.cloneDeep(imagelistObj));
      },

      /**
       * Returns a imagelist
       * @param   {[[string]]} imagelistId
       * @returns {[[Object]]} [[Imagelist Object]]
       */
      readImagelist: function (imagelistId) {
        if (imagelistId) {
          return this._imagelist(imagelistId);
        } else {
          throw new Error('imagelistId not found');
        }
      },

      /**
       * Returns the imagelist queue
       * @returns {[[Object]]} [[All Imagelists]]
       */
      readAllImagelists: function () {
        return this._imagelist;
      }

    };
    return ImageService;
  };

})();
