var assert = require('assert');
var greet = require('../greet');

describe('The Greet function', function(){

    it('Should be able to greet Dikgang', function(){
        assert.equal('Hello, Dikgang', greet('Dikgang'));
    });

    it('Should send an error message if there is no name passed/called', function(){
        assert.equal('Error, Please enter a name', greet(''));
    });
    it('Should end an error message if a number is passed/called instead of a name', function(){
        assert.equal('Error, Enter a name not a number!', greet(5));
    });
});