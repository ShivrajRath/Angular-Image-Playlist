(function () {
  'use strict';

  describe('Array', function () {
    describe('#indexOf()', function () {
      it('should return -1 when the value is not present', function () {
        assert.equal(-1, [1, 2, 3].indexOf(5));
        assert.equal(-1, [1, 2, 3].indexOf(0));
      });
    });
  });

  // Sample test cases
  describe('A suite', function () {

    it('validating array content', function () {
      expect([1, 2, 3]).to.include(2);
    });
  });

})();