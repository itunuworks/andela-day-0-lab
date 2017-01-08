// testing code goes here

'use strict'

var findMinMax = require('../app/main.js').findMinMax;

describe('Min-Max Numbers in a List: ', function () {

  describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

    it('should return [1,4] for [1, 2, 3 , 4]', function () {
      expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
    });

    it('should return [4, 6] for [6, 4]', function () {
      expect(findMinMax([6, 4])).toEqual([4, 6]);
    });

    it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
      expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
    });

    it('should return [-1, 1024] for [1024, -1, 4, 2, 9]', function () {
      expect(findMinMax([1024, -1, 4, 2, 9])).toEqual([-1, 1024]);
    });

    it('should return [55, 78] for [65, 57, 55, 78]', function () {
      expect(findMinMax([65, 57, 55, 78])).toEqual([55, 78]);
    });

    it('should return [14, 16] for [16, 14]', function () {
      expect(findMinMax([16, 14])).toEqual([14, 16]);
    });

  });

  describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

    it('should return [4] for [4, 4, 4, 4]', function () {
      expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
    });

    it('should return [3] for [3, 3, 3, 3, 3]', function () {
      expect(findMinMax([3, 3, 3, 3, 3])).toEqual([3]);
    });

    it('should return [100] for [100, 100, 100]', function () {
      expect(findMinMax([100, 100, 100])).toEqual([100]);
    });

    it('should return [200] for [200]', function () {
      expect(findMinMax([200])).toEqual([200]);
    });

    it('should return [15] for [15, 15]', function () {
      expect(findMinMax([15, 15])).toEqual([15]);
    });

  });

})