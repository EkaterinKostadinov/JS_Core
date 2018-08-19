var expect = require("chai").expect;

function sum(arr) {
    var sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}

describe('Group', function () {
    it('should return 1', function () {
        expect(sum([-1,2])).to.be.equal(1);
    });
    
    it('should return zero when the array is empty', function () {
        expect(sum([])).to.be.equal(0);
    });

    it('should return 3', function () {
        expect(sum([1,2])).to.be.equal(3);
    });

    it('soould return 1.2', function () {
        expect(sum([1.2])).to.be.equal(1.2);
    });
});

