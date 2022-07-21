let assert = require('assert');
let countRegNumber = require('../countRegNumber');

describe('CountRegNumber Function', function(){

    it('should return 4 as the number of registrations in a string', function(){
        assert.equal(4, countRegNumber('CY 123,CJ 123, FGT 123 L, EFF 100 GP'));

    });
    it('should return 2 as the number of registrations in a string', function(){
        assert.equal(2, countRegNumber('FGT 123 L, EFF 100 GP'));
        
    });
    it('should return 1 if there are no registrations in a string', function(){
        assert.equal(1, countRegNumber('NA 12459'));
        
    });
});