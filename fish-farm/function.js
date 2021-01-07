//High than 500 kg Stock Volumes are filtered
function highVolumeStock(pArr){
    let highStock = pArr.filter(item =>item.stockVolumeInKg > 500);
    return highStock;
    }

function goodPrice(pArr){
    let availablePrice = pArr.filter(item => item.price >8 && item.price < 13)
    return availablePrice;
}


/// bu fonksiyon kontrol et
function expensiveFish(pArr){
    let expensiestFish = pArr.filter(item => item.price >8 && item.price < 13)
    return expensiestFish.fishType;
}

function totalFishStock(pArr){
    let total = pArr.reduce((sum, item)=> sum + item.stockVolumeInKg,0);
        return total;
}