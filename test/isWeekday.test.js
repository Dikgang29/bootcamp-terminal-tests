let assert = require('assert');
let isWeekday = require('../isWeekday');

describe('isWeekday Function', function(){

    it('should return true if the weekday is Monday', function(){
        assert.equal(true, isWeekday('Monday'));
    });

    it('should return false if the weekday is Sunday', function(){
        assert.equal(false, isWeekday('Sunday'));
    });
    it('should return false if the weekday is Saturday', function(){
        assert.equal(false, isWeekday('Saturday'));
    });
});