/**
 * @namespace app
 * @description Contains app routes and browserify requirements
 * @author ShivrajRath
 */
(function () {
  'use strict';

  // Browserify dependency fetch
  var angular = require('angular');
  require('angular-resource');
  require('angular-ui-router');
  require('ui-bootstrap');

  // Declaring the app to be used by app dependencies
  angular.module('angularTemplate', ['ng', 'ngResource', 'ui.router', 'ui.bootstrap']);

  require('./app/app.constants');

  require('./app/common/utils');
  require('./app/common/components');
  require('./app/modules');

  require('./app/app.route');
})();
