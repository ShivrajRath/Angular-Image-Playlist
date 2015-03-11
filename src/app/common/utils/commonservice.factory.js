/**
 * @namespace CommonServiceFactory
 * @memberof utils
 * @description Common service layer for ajax call
 * @author ShivrajRath
 */
(function () {

  'use strict';

  module.exports = function ($http) {
    var getResource = function (url, cache) {
      return $http.get(url, {
        cache: cache || true
      });
    };

    return {
      getResource: getResource
    };
  };

})();
