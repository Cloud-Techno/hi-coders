/**
 * bataryanin seviyesini gosteren bir islem yapilmasi
 *  ilk once batarya seviyesinin hangi durumda oldugunu bilmem gerekiyor,
 *  daha sonra batarya arttikca veya azaldikca, yani duruma gore sekil alan bir yapi olusturulmali,
 *  duruma gore sekil degistiren yapiyi dinamik halde olmali,
 */
function updateUI(pEnerjiLevel,pBattaryContainer){
    pBattaryContainer.className = `enerji-level-${pEnerjiLevel}`
    }
 //enerji seviyem 0 da basliyacak
 let enerjiLevel = 0;

// butonlari degisken icerisine atama
const artanElement = document.getElementById('increaseButton');
const azalanElement = document.getElementById('decreaseButton');

// butonlara basildiginda uygulanacak olan function lari belirleme
artanElement.addEventListener('click',doldur);
azalanElement.addEventListener('click',azalt);

const batteryElement = document.getElementById('battery');//batarya elementini degiskene atama

function doldur(){
    if(enerjiLevel<3){
        enerjiLevel++;
    }
    updateUI(enerjiLevel,batteryElement)
}

function azalt(){
    if(enerjiLevel > 0){
        enerjiLevel--;
    }
    updateUI(enerjiLevel,batteryElement)
}