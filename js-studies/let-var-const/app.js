//DIFFERENCE OF VAR-LET-CONST 

//let can be changeable
/* let name = "ferdi";
console.log(name);

name="vedat";
console.log(name);

//---------------------
const age = 32;
console.log(name); */

// age = 33;    IT s not changeable

//const age;   it s not useful
//age = 32;     


//-------------------
// Using LET 
/* let str = "";

for (let i=0; i<10; i++){
    str = str.concat(i);
    console.log(str);
} */

//way to change const value 
/* const myArr = [1,2,3];
console.log(myArr);
myArr.pop();
console.log(myArr);

//expected
(3) [1, 2, 3]
(2)  [1, 2] */

//------------
/* const student = {
    name:"Ferdi",
    age:31
}
console.log(student);

Object.freeze(student);//if I use freeze. We cant change student values
student.name = "Vedat";
student.age = 35;
console.log(student);
 */
//expected result
/* age: 31
name: "Ferdi"
age: 35//without freeze
name: "Vedat"//without freeze
-------
// with freeze 
age: 31
name: "Ferdi"
age: 31
name: "Ferdi" */

//-----
/* 
var age = 40;
console.log(age);

age = 42;
console.log(age);
/* ----the result  */
/* 40
42  */


//  VAR ----> global scope /functional scope
/* var x = 1;
console.log(x);

if (x ===1){
    var x = 10;
    console.log(x)
}
console.log(x);

result 
1
10
10 */


//LET ---> block scope 
/* let y = 1;
console.log(y);

if (y === 1 ){
    let y =10;
    console.log(y);
}
console.log(y);

result 
1
10
1 */











