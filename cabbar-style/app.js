const color = "red";
const model = "BMW";
const age = 2011;
let clientexp = 7;
// input olarak belirtip ve ordan degerleri degiskene atarak olusturulabilirdi. ama o konuyu gormedigimiz icin o yontemi kullanmadim.
//const color = document.getElementById("inputid").value;     
if ((((((color === "red")&&(model === "BMW")) && ((age >2010)&&(age>2019))) || ((age>=2020)&&(color === "black"))) ||
    ((((age>2005)&&(age<2010)) || ((age>2014)&&(age<2020))) && (model ==="AUDI"))) ||
    (((color ==="black") && ((age>2001)&&(age>2018))) && (model === "VW"))){
        console.log("Cabbar ustamiz araciniz ile itina ile ilgilenecektir.");
    }
else {
    console.log("araciniz tamir edilememektedir.");
}
    
