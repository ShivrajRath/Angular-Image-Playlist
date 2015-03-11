/**
 * @namespace utils
 * @description Contains defination of all app utilities
 * @author ShivrajRath
 */
var app = require('angular').module('angularTemplate');

/**
 * Utility inclusion for browserify indexing
 */
app.factory('CommonServiceFactory', require('./commonservice.factory'));
app.factory('LoggerFactory', require('./logger.factory'));
