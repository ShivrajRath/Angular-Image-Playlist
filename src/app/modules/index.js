/**
 * @namespace modules
 * @description Contains defination of all angular modules
 * @author ShivrajRath
 */
(function () {
  'use strict';
  var app = require('angular').module('angularTemplate');

  /**
   * Module Injection via Browserify
   */
  app.controller('MainCtrl', require('./main/main.controller'));
  app.controller('TeamMembersCtrl', require('./teammembers/teammembers.controller'));
  app.controller('StateManagementCtrl', require('./statemanagement/statemanagement.controller'));
})();
