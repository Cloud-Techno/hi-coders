function milad(pDate){
    let zaman;
    zaman = (pDate - Math.round (pDate / 33)) + 622 + 1;
    return zaman;
}

module.exports = {
    hicriYear:milad    
} ;