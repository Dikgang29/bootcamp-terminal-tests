let assert = require('assert');
let regCheck = require('../regCheck');

describe('The Function RegCheck', function(){
it('Should be able identify registrations from Limpopo', function(){
    assert.equal(true, regCheck('CYX 123 L','L'))
});
it('Should be able identify registrations from Gauteng', function(){
    assert.equal(true, regCheck('EF 123 GP','GP'))
});

it('Should return false if a registration is not from a certain province', function(){
    assert.equal(false, regCheck('CY 123-256','GP'))
});
});