let assert = require('assert');
let transportFee = require('../transportFee');

describe('transportFee Function', function(){

    it('should be able to show how much could be spent on a morning shift', function(){

        assert.equal('R20', transportFee('morning'));
    });

    it('should be able to show how much could be spent on a afternoon shift', function(){

        assert.equal('R10', transportFee('afternoon'));
    });
    it('should be able to show how much could be spent on a night shift', function(){

        assert.equal('free', transportFee('night'));
    });
});