//1- High than 500 kg Stock Volumes are filtered
  function highVolumeStock(pArr){
    let highStock = pArr.filter(item =>item.stockVolumeInKg > 500);
    let fishNameListInStockOver500 = highStock.map(fish.fishType);
    return fishNameListInStockOver500;
    }
 /*   
//2-
function goodPrice(pArr){
    let availablePrice = pArr.filter(item => item.price >=9 && item.price =< 13)
    return availablePrice;
} 

// 3- BERN DE OLANLAR EKLENECEK
function bernWinterFish(pArr){
    let results = pArr.filter(item => item.season =="Winter");
         return results;
       } /**/
// 4--TARIHSEL SIRALAMA
 /* function sortOnDate(pArr){
      pArr.sort(function(a, b) {return b.entryDate - a.entryDate} )
      
 } */
       

/* 

/// bu fonksiyon kontrol et
function expensiveFish(pArr){
    let expensiestFish = pArr.filter(item => item.price >8 && item.price < 13)
    return expensiestFish.fishType;
}


function totalFishStock(pArr){
    let total = pArr.reduce((sum, item)=> sum + item.stockVolumeInKg,0);
        return total;
}

 */
