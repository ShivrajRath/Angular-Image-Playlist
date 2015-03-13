(function () {
  'use strict';

  // Sample test cases
  describe('A suite', function () {
    it('contains spec with an expectation', function () {
      expect(true).toBe(true);
    });

    it('validating array content', function () {
      expect([1, 2, 3]).to.include(2);
    });
  });

})();
