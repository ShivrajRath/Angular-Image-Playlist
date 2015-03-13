/*
 * @namespace AppConstants
 * @memberof app
 * @description Defines application constants
 * @author ShivrajRath
 */
(function () {
  'use strict';

  var app = require('angular').module('angularTemplate');
  app.constant('AppConstants', {
    'URLS': {
      'TEAM_MEMBERS_LIST': './configs/teammembers.config.json'
    }
  });
})();
