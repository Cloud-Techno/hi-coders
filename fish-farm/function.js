//Print Names of Fishes
function  showName(pArray,pMessage){
    console.log(pMessage);
     pArray.map(item => 
       console.log(item.fishType))
}
function showValue (pValue,pMessage){
    console.log(pMessage);
    console.log(pValue);
    
}
function sortArrayByAlfabeticNumber(pArray){
    return pArray.sort(function(a, b) {
        let nameA = a.fishType.toUpperCase(); // ignore upper and lowercase
        let nameB = b.fishType.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      // names must be equal
        return 0;
      });
}

// Number 1 solution
function getFishesHeavierThanStock(pArray,pStock){
    return pArray.filter(item => item.stockVolumeInKg > pStock);
}

// Number 2 solution
function betweenPrice(pArray,pLowerPrice,pUpperPrice){
    return pArray.filter(item=> item.price > pLowerPrice &&
                                item.price < pUpperPrice)
}

// Number 3 solution
function getWinterFishInBern (pArray,pLocation,pSeason){
    return pArray.filter(item => item.saleLocations.includes(pLocation) && item.season == pSeason )
}

// Number 4 solution
function sortFishesExpireDate(pArray){
  return  pArray.sort(function(a,b) {
            return a.entryDate - b.entryDate;
          })}


// Number 5 solution
function getFishesFromEuropean(pArray,pEuropeanCountries){
    return pArray.filter(item => {
        return pEuropeanCountries.some(country =>
            item.originCountry === country)
    })
       
}

function filterFishesCheaperThan10(pArray,pPrice){
    const listOfFishesLessThanPrice= pArray.filter(item =>item.price > pPrice)
    return sortArrayByAlfabeticNumber(listOfFishesLessThanPrice);
   }
// Number 6 solution
function calculateTotalFishStock(pArray){
    return pArray.reduce(( total, item) => total + item.stockVolumeInKg, 0)
}
// Number 7 solution
function getHighestPrice(pArray){
    let highPrice = 0;
    pArray.forEach(item => {
       if(item.price > highPrice){
            highPrice = item.price;
           }
    });return highPrice;
}
// Number 8 solution
 function getLongestSustainableFish(pArray){
    const maxStandingFish =  pArray.sort(function(a,b) {
               b.durationInDays - a.durationInDays})[0];
            return maxStandingFish;
        }
// Number 9 solution

function getAveragePriceForSRRWinterAutumn(pArray){
    const filteredFishList = pArray.filter(item => 
        ((
            item.saleLocations.indexOf("GE") !== -1) || 
            item.saleLocations.indexOf("VD") !== -1 || 
            item.saleLocations.indexOf("NE") !== -1
            ) 
        && 
        ((item.season == "Winter") || (item.season == "Autumn"))
    );
    const total = filteredFishList.reduce(( total, item) => total + item.price, 0)
    return total/filteredFishList.length;
}
// Number 10 solution
function getListOfFishTotalStockSalesTicino(pArray,pLocationTi){

 const totalticino = pArray.filter(item=> item.saleLocations.includes(pLocationTi));
         return totalticino.reduce(( total, item) => total + item.stockVolumeInKg, 0);
        }
// Number 11 solution

        function getFishesFromOutsideEurope(pArray){
            return pArray.filter(item => 
                item.originCountry == "Japan" ||
                item.originCountry == "Egypt" ||
                item.originCountry == "Vietnam"
            )
        }

        function getFishesZurihInSummer(pArray){
            const fishListZurihInSummer = pArray.filter(item => (item.saleLocations.includes("ZH")) && item.season.includes("Summer"))
            const total = fishListZurihInSummer.reduce(( total, item) => total + item.itemWeightInGrams, 0)
            return total/fishListZurihInSummer.length;
        }
