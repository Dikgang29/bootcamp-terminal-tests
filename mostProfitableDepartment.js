module.exports = function mostProfitableDepartment(salesData){

    var salesMap ={};
    
    
    for(var i=0;i<salesData.length;i++){
      
      const salesObj = salesData[i];
      salesMap[salesObj.department]=0;
       
    }
    
    for(var i=0;i<salesData.length;i++){
      
      const salesObj = salesData[i];
      var currentSalesTotal = salesMap[salesObj.department];
      currentSalesTotal+=salesObj.sales;
      salesMap[salesObj.department]=currentSalesTotal;
      
       
    }
    var currentMaxSale = 0;
    var currentDepartmentSale = '';
    for(const salesDepartment in salesMap) {
     // console.log(salesDepartment);
      //console.log(salesMap[salesDepartment]);
      let currentSales = salesMap[salesDepartment];
      if(currentSales>currentMaxSale) {
        currentMaxSale = currentSales
        currentDepartmentSale =salesDepartment;
      }  
    }
      return currentDepartmentSale;
    }