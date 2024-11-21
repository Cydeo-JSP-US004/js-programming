class Employee{

    constructor(name = "Unknown", age = 18, salary = 0, jobTitle = "Unknown"){
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.jobTitle = jobTitle;
    }

    work(){
        console.log(`${this.name} is working`);
    }

}


let employee1 = new Employee("Irina", 28, 100_000, "SDET");
console.log(employee1);


let employee2 = new Employee("Suleyman", 30, 90_000, "Software Developer");
console.log(employee2);


employee1.work();
employee2.work();



