/**
 * Represents a person with basic information.
 * @constructor
 * @param {string} name - The person's name.
 * @param {number} age - The person's age.
 * @param {string} gender - The person's gender.
 * @author Muhtar
 */
class Person{
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    /**
     * Logs a message indicating that the person is eating.
     * @author Muhtar
     */
    eat(){
        console.log(`${this.name} is eating.`);
    }
}


/**
 * Represents a student who extends the Person class.
 * @extends Person
 * @author Muhtar
 */
class Student extends Person{
    
    /**
     * Constructs a new Student object.
     * @param {string} name - The student's name.
     * @param {number} age - The student's age.
     * @param {string} gender - The student's gender.
     * @param {string} grade - The student's grade.
     * @author Muhtar
     */
    constructor(name, age, gender, grade){
        super(name, age, gender);
        this.grade = grade;
    }

    /**
     * Logs a message indicating that the student is studying.
     * @author Muhtar
     */
    study(){
        console.log(`${this.name} is studying.`);
    }

}

/**
 * Represents a teacher who extends the Person class.
 * @extends Person
 * @author Muhtar
 */
class Teacher extends Person{

    /**
     * Logs a message indicating that the teacher is teaching.
     * @author Muhtar
     */
    teach(){
        console.log(`${this.name} is teaching.`);
    }

}


// create objects.
let student1 = new Student("John", 18, "Male", "9th");
console.log(student1);
student1.eat();
student1.study();

let teacher1 = new Teacher("Mary", 35, "Female");
console.log(teacher1);
teacher1.eat();
teacher1.teach();