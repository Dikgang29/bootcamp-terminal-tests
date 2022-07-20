let assert = require('assert');
let isFromBellville = require('../isFromBellville');

describe('The isFromBellville Function', function(){
    it('should return true if a registration is from Bellville', function(){
        assert.equal(true, isFromBellville('CY 123'));
    });

    it('should return false if a registration is from Cape Town', function(){
        assert.equal(false, isFromBellville('CA 123'));
    });
});