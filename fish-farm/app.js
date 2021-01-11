/*
*   +1) Stok miktari 500 kg uzerinde olan baliklarin isimleri nelerdir?
*   +2) Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar hangileridir?
*   3) Sadece Bern'de ve kis sezonu satilan baliklar hangileridir?
*   4) Son kullanma tarihlerine gore baliklari siralayiniz. (Son kullanma tarihi yaklasan baliklar once gosterilmelidir)
*   5) Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralayiniz.
*   +6) Toplam balik stoku ne kadardir?
*   7) En pahali olan balik hangisidir? 
*   8) En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?
*   9) Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati nedir?
*   10) Ticino Kantonu icin stokta toplam ne kadar balik mevcuttur?
*   11) Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramajini bulunuz?
*/

function getFishName(pList){
    return pList.map(fish =>fish.fishType);
}

function stringifyArray(pList){
    return pList.join(",")
}


const filteredHighVolumeStock = fishFarm.filter(item => item.stockVolumeInKg > 500);
const fishNameHighVolumeStock = getFishName(filteredHighVolumeStock);


const domContainerFishName = document

//1-High than 500 kg Stock Volumes are filtere
//let  highVolumeStock(fishFarm);
//console.log(filteredHighVolumeStock);

//2- Fishes are between 9fr and 12fr
//let filteredGoodPriceFish = goodPrice(fishFarm);
//console.log(filteredGoodPriceFish);

//3-Only at the Bern and in the Winter Fishes
//let bernWinter = bernWinterFish(fishFarm);
//console.log(bernWinter);

//4-tarihsel siralama
//let sortingDate = sortOnDate(fishFarm);
//console.log(sortingDate);



//6-Total Fish Stock
//let totalFish = totalFishStock(fishFarm);
//console.log(totalFish);

//7-The most expensive fish
//let mostPriceFish = expensiveFish(fishFarm);
//console.log(mostPriceFish);

Array
 fishFarm.forEach(fish => document.getElementById('output').innerHTML +=fish.fishType); 