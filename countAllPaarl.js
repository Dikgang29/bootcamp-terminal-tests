module.exports = function countAllPaarl(regNumber) {
    var counter = 0;
      var registration = regNumber.split(',');
      for (var i = 0; i<registration.length; i++)  {
      var number = registration[i].trim();
        if (number.startsWith('CJ')) {
        counter++;
        } 
      }
      return counter;
    }