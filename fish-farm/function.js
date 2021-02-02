//Print Names of Fishes
function  showName(pArray,pMessage){
    console.log(pMessage);
     pArray.map(item => 
       console.log(item.fishType))
}
function showValue (pValue,pMessage){
    console.log(pValue);
    console.log(pMessage);
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
      })
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
/* function sortFishesExpireDate(pArray){
    pArray.map(item => 
        item.entryDate.sort(function(a, b) {
            return a - b;
          }))
} */

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