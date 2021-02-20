
const makHak = 4;

let supheliVagon = Math.floor((Math.random() * 10) + 1);
let tahminSayisi =0;

for (tahminSayisi=0; tahminSayisi<makHak; tahminSayisi++){
    let tahmin = parseInt(prompt("Let's guess about suspicious wagon"));

    if (supheliVagon === tahmin){
        console.log('tebrikler bildiniz');
        if (tahminSayisi < makHak){
            console.log(` ${tahminSayisi+1} seferde bilebildiniz. Puaniniz ${25*(makHak-tahminSayisi)}`);
        }
        
    }
    else if (tahmin > supheliVagon){ 
            console.log('on vagonlara git');
    }
    else if (tahmin< supheliVagon){
        console.log('arka vagonlara git');
    }
}



