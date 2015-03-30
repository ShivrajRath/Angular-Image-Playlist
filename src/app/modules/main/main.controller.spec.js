/**
 * @namespace MainControllerSpec
 * @memberof spec
 * @description Test cases for main controller
 */
(function () {
  'use strict';

  describe('controllers', function () {
    var scope;

    beforeEach(module('angularTemplate'));

    beforeEach(inject(function ($rootScope) {
      scope = $rootScope.$new();
    }));

    it('should define more than 5 awesome things', inject(function ($controller) {
      expect(scope.awesomeThings).to.be.undefined;

      $controller('MainCtrl', {
        $scope: scope
      });

      expect(angular.isArray(scope.awesomeThings)).to.be.true;
      expect(scope.awesomeThings.length > 5).to.be.true;
    }));
  });

})();