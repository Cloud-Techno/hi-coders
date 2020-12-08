//DIFFERENCE OF VAR-LET-CONST 

//let can be changeable
let name = "ferdi";
console.log(name);

name="vedat";
console.log(name);


const age = 32;
console.log(name);

// age = 33;    IT s not changeable

//const age;   it s not useful
//age = 32;     



let str = "";

for (let i=0; i<10; i++){

    str = str.concat(i);
    console.log(str);
}