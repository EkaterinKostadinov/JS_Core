var expect = require('chai').expect;
const symmetry = require('./ArraySymmetry');

describe('Group', function () {
    it('should return false [1 , 2]',function () {
      expect(symmetry([1,2])).to.be.equal(false);
    });

    it('should return true [1]', function () {
        expect(symmetry([1])).to.be.equal(true);
    });

    it('should return true [1, 2, 1]', function () {
        expect(symmetry([1,2,1])).to.be.equal(true);
    });

    it('test with strings', function () {
        expect(symmetry(['test',2,'test'])).to.be.equal(true);
    });

    it('test', function () {
        expect(symmetry([])).to.be.equal(true);
    });

    it('test with negative numbers', function () {
        expect(symmetry([-1, -2, -1])).to.be.equal(true);
    });

    it('test with negative numbers', function () {
        expect(symmetry([-1, -2, 1])).to.be.equal(false);
    });
});
