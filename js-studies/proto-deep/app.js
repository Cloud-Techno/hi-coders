function Person(){

}
Person.prototype.test1 = function(){
    console.log(" TEST 1");
}
Person.prototype.test2 = function(){
    console.log("TEST 2");
}

//Employee constructor created for  inheritance
function Employee(name,age){
    this.name = name;
    this.age = age;

}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.myTest = function(){
    console.log("My TEST");
}

const emp = new Employee("Ferdi",31);
const emp2 = new Employee("Vedat",32);
console.log(emp);
console.log(emp2);
