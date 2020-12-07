// Call, Apply, Bind

const obj1 = {
    number1:30,
    number2:40
};
const obj2 = {
    number1:10,
    number2:40
};
function addNumbers(number3,number4){
    console.log(this.number1 + this.number2 + number3 + number4);
}
addNumbers.call(obj1,100,200); // obligatory for using and value 
addNumbers.call(obj2,100,200);


//Apply Using (there s just one difference between with call . and it s we have to use array in Apply)
addNumbers.apply(obj1,[100,200]);
addNumbers.apply(obj2,[300,500]);

//Bind Using ( it s also smiliar. We will attact function with other Object by bind)
// The difference is we can have copy func

function getNumberTotal(number3,number4){
    return this.number1 + this.number2 + number3 + number4;
}

const copyFunc1 = getNumberTotal.bind(obj1);
const copyFunc2 = getNumberTotal.bind(obj2);

console.log(copyFunc1(100,200));
console.log(copyFunc2(100,200));