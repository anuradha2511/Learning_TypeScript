let courses = ["Angular", "React", "Nodejs"];

console.log(courses.toString());

interface IEmployee {
    id: number;
    name: string;
    lastname: string;
}

let e1: IEmployee;

let e2 = { id: 123, name: "John"};


//e1 = e2 ; // type casting . 

//e2 = e1; //

let student = ["anu", "gayu", "janu"];
console.log(student.toString());


interface IStudent {
    id: number;
    firstName: string;
    lastName: string;
    //designation: string;
}

let s1 : IStudent;
let s2 ={id: 123, firstName:"Arnav", lastName:"Patil" }

s1 = s2;
s2 = s1;