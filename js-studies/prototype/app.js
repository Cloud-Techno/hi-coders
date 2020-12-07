
// Employoo Object
function Employee(name,age){
    this.name =name;
    this.age = age;
    this.showInfo = function(){
        console.log("nome: " +name + "anno: "+age);
    }
}

const emp1 = new Employee("Ferdi",31);
const emp2 = new Employee("Vedat",25);

console.log(emp1);
console.log(emp2);


// Creating Prototype Object

const obj= {
    test1: function(){
        console.log("Test 1");
    },
    test2: function(){
        console.log("Test2");
    }
}

const emp = Object.create(obj);
emp.name = "Ferdi";
emp.age = 31;
console.log(emp);
