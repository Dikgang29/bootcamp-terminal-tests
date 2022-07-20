module.exports = function greet(firstName){

if(firstName=='') return 'Error, Please enter a name';
else if( firstName>=0 || firstName<=0) return 'Error, Enter a name not a number!';
else if(firstName == undefined) return 'Error, have to pass a name as a string';

return 'Hello, '+firstName;
}