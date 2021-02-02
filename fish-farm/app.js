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

const AMOUNT_OF_STOCK = 500;
const LOWER_PRICE = 9;
const UPPER_PRICE = 12;
const SEASON = "Winter"
const LOCATION = "BE"
const CHEAPER_PRICE_FOR_EUROPE = 10;
const EUROPE_COUNTRIES = ["Norway","United Kingdom","Poland","France","Italy","GREECE","Spain"]

/**
 * 1- Name of fishes heavier than 500 kg stock in Array
 */
const listOfFishesHeavierThan500 = getFishesHeavierThanStock(fishFarm,AMOUNT_OF_STOCK);
showName(listOfFishesHeavierThan500,"1-Name of fishes heavier than 500 kg stock in Array:")
/**
 * 2- Fishes are Between 9 and 12 fr 
 */
 const listOfFishInPriceRange = betweenPrice(fishFarm,LOWER_PRICE,UPPER_PRICE);
 showName(listOfFishInPriceRange, "2-Fishes are Between 9 and 12 fr : ")
/**
 * 3-Fishes are only in Bern and sell only at Winter
 */
const listOfOnlyBernWinterFish = getWinterFishInBern(fishFarm,LOCATION,SEASON);
showName(listOfOnlyBernWinterFish,"3-Fishes are only Bern canton in the Winter Season");
/**
 * 4-Sort Fishes based on expire time
 */
//const sortFishesBasedOnExpireTime = sortFishesExpireDate(fishFarm)
//showName(sortFishesBasedOnExpireTime,"4-Sort Fishes based on expire time")
/**
 * 5- Sort Fishes cheaper than 10 Fr accourding to Alfabetic from AB 
 */
const fishesFromEurope = getFishesFromEuropean(fishFarm,EUROPE_COUNTRIES);
const fishesCheaper10 = filterFishesCheaperThan10(fishesFromEurope,CHEAPER_PRICE_FOR_EUROPE)
showName(fishesCheaper10," 5- Sort Fishes cheaper than 10 Fr accourding to Alfabetic from AB");
/**
 * 6-Total amount of Fishes Stock
 */
const totalFishStock = calculateTotalFishStock(fishFarm)
showValue(totalFishStock, "Toplam balik stok miktari :")
/**
 *7- The highest Price Fishes
 */

/**
 * 8- Which Fishes can be stay for longest
 */

/**
 * 9-Average Fishes Price in Winter and Autoum and Romance Part of Switzerland 
 */

/**
 * 10- How much kg in Stock to Ticino Canton
 */

/**
 * 11- Average Fishes sells at ZH and produce in Summer season from out of AB countries
 */
 