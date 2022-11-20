class Person {
    public firstName: string;
    public lastName: string;
    public designation: string;

    public Work(): void {
        console.log("Person Details");
        
    }
}

class Student extends Person {
    // constructor
    constructor(firstName: string, lastName: string, designation: string){
        // calling parent class constructor
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
// overriding parent class work method
public Work(): void {
    super.Work();
    console.log(`${this.firstName} ${this.lastName} - ${this.designation}`);

}
}

class Employee extends Person {
    constructor(firstName: string, lastName: string, designation: string){
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
    
public Work(): void {
    super.Work();
    console.log(`${this.firstName} ${this.lastName} - ${this.designation}`);

}
}

class Tranier extends Person {
    constructor(firstName: string, lastName: string, designation: string){
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
    
public Work(): void {
    super.Work();
    console.log(`${this.firstName} ${this.lastName} - ${this.designation}`);

}
}

let person: Person[] = new Array(new Student("Anuradha", "Patil", "Student"), new Employee("Om", "Pawar", "Employee"), new Tranier("Kavya", "Bhosle", "Trainer"));
for (var per of person) {
    per.Work();
}