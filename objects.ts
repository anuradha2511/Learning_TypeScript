var emp ={
    name: "Anuradha",
    score: 250
}

for (const e in emp) {
console.log(e);
console.log(emp[e]);


}
        
    
var courses: any = ["ANgular", "ReactJs", ".Net"];

courses.push("java");
courses.push(10);

for(var i = 0; i < courses.length; i++)
{
    console.log(courses[i]);
}

// var x = courses[0];
// var y = courses[1];

var[a, b, c] = courses;
console.log(a);
console.log(b);
console.log(c);

var std = {
    firstName: "Jack",
    lastName: "Sparrow"
}

var { firstName: userFirstName, lastName: userLastName} = std;
console.log(userFirstName);
console.log(userLastName);


var arr: number[] = [20, 30, 12, 100, 20];
arr.splice(2, 3, 88,99);
arr.pop();
console.log(arr.toString());


function addss (num1:number, num2:number) {
    return num1 + num2;
}
console.log(addss);


function displayN(id:number, name:string, role:string = "Guest") 
{
    console.log("Id", id);
    console.log("Name", name);
    if(role!= undefined)
    {
        console.log("Role", role);
    }
    
}

//displayN(1, "Dnyanesh", "Admin");
displayN(1, "Dnyanesh");



