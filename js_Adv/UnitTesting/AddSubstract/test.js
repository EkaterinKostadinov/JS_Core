var expect = require('chai').expect;
var calculator = require('./index');
var calc = calculator();

describe('groupTests', function () {
    it('test get',function () {
        expect(calculator().get()).to.be.equal(0);
    });

    it('test add',function () {
        calc.add(2);
        expect(calc.get()).to.be.equal(2);
    });

    it('test substract', function () {
        calc.subtract(4);
        expect(calc.get()).to.be.equal(-2);
    });
});