var emp = {
    name: "Anuradha",
    score: 250
};
for (var e in emp) {
    console.log(e);
    console.log(emp[e]);
}
var courses = ["ANgular", "ReactJs", ".Net"];
courses.push("java");
courses.push(10);
for (var i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}
// var x = courses[0];
// var y = courses[1];
var a = courses[0], b = courses[1], c = courses[2];
console.log(a);
console.log(b);
console.log(c);
var std = {
    firstName: "Jack",
    lastName: "Sparrow"
};
var userFirstName = std.firstName, userLastName = std.lastName;
console.log(userFirstName);
console.log(userLastName);
var arr = [20, 30, 12, 100, 20];
arr.splice(2, 3, 88, 99);
arr.pop();
console.log(arr.toString());
function addss(num1, num2) {
    return num1 + num2;
}
console.log(addss);
function displayN(id, name, role) {
    if (role === void 0) { role = "Guest "; }
    console.log("Id", id);
    console.log("Name", name);
    if (role != undefined) {
        console.log("Role", role);
    }
}
//displayN(1, "Dnyanesh", "Admin");
displayN(1, "Dnyanesh");
