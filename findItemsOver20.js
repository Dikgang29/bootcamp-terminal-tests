module.exports = function findItemsOver20(items){
    let array=[];
    for(let i=0;i<items.length;i++){
      let itemsInArray=items[i];
      if(itemsInArray.qty>20) {
        array.push(itemsInArray);
      }
    }
      return array;
    }