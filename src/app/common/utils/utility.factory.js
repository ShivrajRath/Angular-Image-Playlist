/**
 * @namespace UtiltyFactory
 * @memberof utils
 * @description Common Utility framework
 * @author ShivrajRath
 */
(function () {
  'use strict';

  module.exports = function () {
    return {
      /**
       * Creates a random string
       * @param   {[[Number]]} length [[Length of random string]]
       * @param   {[[String]]} chars  [[Optional, characters to be picked for random string creation]]
       * @returns {[[String]]} [[Random string]]
       */
      randomString: function (length, chars) {
        var result = '';
        if (!chars) {
          chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }
        for (var i = length; i > 0; --i) {
          result += chars[Math.round(Math.random() * (chars.length - 1))];
        }
        return result;
      }
    };
  };
})();
