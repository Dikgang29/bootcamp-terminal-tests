module.exports = function countAllFromTown(regString, townReg) {
    let counter = 0;
      var number = regString.split(',');
      for (var i = 0; i<number.length; i++) {
      if (number[i].includes(townReg)) {
      counter ++; 
      } 
      }
      return counter;
    }