/**
 * @namespace TeammemeberCtrl
 * @memberof modules
 * @description Controller function for teammembers module
 * @author ShivrajRath
 */
(function () {
  'use strict';

  module.exports = function ($scope, CommonServiceFactory, AppConstants) {
    $scope.members = [];

    var url = AppConstants.URLS.TEAM_MEMBERS_LIST;

    var servicePromise = CommonServiceFactory.getResource(url);
    servicePromise.then(function (successObj) {
        $scope.members = successObj.data;
      },
      function (errorPayload) {
        console.log(errorPayload);
        //Call the logger service to log this message
      });
  };
})();
