let assert = require('assert');
let countAllPaarl = require('../countAllPaarl');

describe('countAllPaarl Function',function(){

    it('Should return the number of registrations from Paarl to be 3', function(){

        assert.equal(3,countAllPaarl('CJ 123, CA 456, CJ 789, CJ 01112, NA 951'));
    });

    it('Should return the number of registrations from Paarl to be 0', function(){

        assert.equal(0,countAllPaarl('CY 123, CA 456, CA 789, NP 01112, NA 951'));
    });
    it('Should return the number of registrations from Paarl to be 2', function(){

        assert.equal(2,countAllPaarl('CJ 753, CA 852, CJ 246'));
    });
});