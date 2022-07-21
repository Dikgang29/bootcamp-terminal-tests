module.exports = function totalPhoneBill(phoneBill) {
  var phone = phoneBill.split(',');
    var counter = 0;
    for(var i =0; i<phone.length;i++) {
    var number = phone[i].trim();
      if (number == 'call') {
      counter += 2.75;
      } else if (number== 'sms') {
      counter += 0.65; 
      }
    }
   var totalCost = (counter).toFixed(2);
  
    return 'R' + totalCost;
  }