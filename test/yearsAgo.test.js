let assert = require('assert');
let yearsAgo = require('../yearsAgo');

describe('YeasAgo Function', function(){
    it('should calculate the difference between the current year and the year 2004', function(){
        assert.equal(18, yearsAgo(2004));
    });

    it('should calculate the difference between the current year and the year 1996', function(){
        assert.equal(26, yearsAgo(1996));
    });
})