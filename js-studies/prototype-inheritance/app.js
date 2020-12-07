function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.showInfos = function (){
    console.log("name: " +this.name + "Age: " + this.age);
}

function Employee(name,age,salary){
    //this.name = name;
    //this.age = age;
    Person.call(this,name,age);
    this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.toString = function(){
    console.log("Employee");
}

Employee.prototype.showInfos = function(){
    console.log("name:"+ this.name + "Age:" + this.age + "Salary: " +this.salary);
}

const emp = new Employee("Ferdi",32,5000);

emp.showInfos();
emp.toString();