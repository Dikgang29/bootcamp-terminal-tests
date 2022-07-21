let assert = require('assert');
let fromWhere = require('../fromWhere');

describe('fromWhere Function', function(){
    it('should show that a registration is from Bellville if it starts with CY', function(){

        assert.equal('Bellville', fromWhere('CY 8596'));
    });
    it('should show that a registration is from Paarl if it starts with CJ', function(){

        assert.equal('Paarl', fromWhere('CJ 1256'));
    });
    it(`should show that a registration is from  'Some Other place' if  it starts with CAW`, function(){

        assert.equal('Some other place!', fromWhere('CCA 4478'));
    });
});