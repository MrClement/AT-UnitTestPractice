var expect = require('chai').expect
var codeToTest = require('../index')
var fib = codeToTest.fib

describe('Fib tests', function() {
    it('should be a number', function() {
            expect(fib(0)).to.be.a('number');
    });
    it('fib(0) and fib(1) should both be 1', function() {
        expect(fib(0)).to.equal(1);
        expect(fib(1)).to.equal(1);
    });
    it('should calculate a fib(2) correctly', function() {
        expect(fib(2)).to.equal(fib(1)+fib(0));
    });
    it('should calculate a random fib(n) where 0 <= n < 15', function() {
        var testNum = Math.floor(Math.random()*15);
        expect(fib(testNum)).to.equal(fib(testNum-1) + fib(testNum-2));
    });
    it('should calculate a random fib(n) where n > 200', function(done) {
        var testNum = Math.floor(Math.random()*100) + 200;
        expect(fib(testNum)).to.equal(fib(testNum-1) + fib(testNum-2));
        done();
    });
    it('should calculate a random fib(n) where n > 1400', function(done) {
        var testNum = Math.floor(Math.random()*10) + 1400;
        expect(fib(testNum)).to.equal(fib(testNum-1) + fib(testNum-2));
        done();
    });
});


