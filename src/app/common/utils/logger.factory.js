/**
 * @namespace LoggerFactory
 * @memberof utils
 * @description Custom Logger framework for application logs
 * @author ShivrajRath
 */
(function () {
  'use strict';

  module.exports = function ($interval, $log) {
    var messageQueue = [];

    function log() {
      if (messageQueue.length) {
        $log.log('batchLog messages: ', messageQueue);
        messageQueue = [];
      }
    }

    // start periodic checking
    $interval(log, 50000);

    return function (message) {
      messageQueue.push(message);
    };
  };

})();
