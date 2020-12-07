function Employee(name,age){
    this.name =name;
    this.age = age;
    this.showInfo = function(){
        console.log("isim: " +name + "age: "+age);
    }
}

const emp1 = new Employee("Ferdi",31);
const emp2 = new Employee("Vedat",25);

console.log(emp1);
console.log(emp2);