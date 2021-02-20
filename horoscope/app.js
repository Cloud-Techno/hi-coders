const month = 3;
const day = 12;

if (((month === 3 ) && (day>=21)) || ((month === 4) &&(day<21))){
    console.log("Your horoscope is Aries");
}
else if (((month === 4 ) && (day>=21)) || ((month === 5) &&(day<21))) {
        console.log("Your horoscope is Taurus");
    
}
else if  (((month === 5 ) && (day>=21)) || ((month === 6) &&(day<21))) {
        console.log("Your horoscope is Gemini");
    }
else if (((month === 6 ) && (day>=21)) || ((month === 7) &&(day<21))) {
        console.log("Your horoscope is Cancer");
    }
else if  (((month === 7) && (day>=21)) || ((month === 8) &&(day<21))) {
        console.log("Your horoscope is Leo");
    }
else if  (((month === 8) && (day>=21)) || ((month === 9) &&(day<21))) {
        console.log("Your horoscope is Virgo");
    }
else if  (((month === 9) && (day>=21)) || ((month === 10) &&(day<21))) {
        console.log("Your horoscope is ");
    }
else if  (((month === 10) && (day>=21)) || ((month === 11) &&(day<21))){
        console.log("Your horoscope is Scorpio ");
    }
else if  (((month === 11) && (day>=21)) || ((month === 12) &&(day<21))){
        console.log("Your horoscope is Sagittarius");
    }
else if  (((month === 12 ) && (day>=21)) || ((month === 1) &&(day<21))){
        console.log("Your horoscope is  Capricorn");
    }
else if (((month === 12 ) && (day>=21)) || ((month === 1) &&(day<21))){
        console.log("Your horoscope is  Aquarius");
    }
else {
    console.log("Your horoscope is Pisces");
}
