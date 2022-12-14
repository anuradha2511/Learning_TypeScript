var employee = {
    id: 25,
    fullName: "Kavya Patil",
    salary: 30000,
    company: "Infosys"
};
console.log(" traverse using for in loop ");
// for (const key in employee) {
//    // console.log(key);
//     console.log(employee[key]);
// }
for (var key in employee) {
    if (Object.prototype.hasOwnProperty.call(employee, key)) {
        console.log(key);
    }
}
console.log(" ");
console.log(" Object Destructuring");
var id = employee.id, fullName = employee.fullName, salary = employee.salary, company = employee.company;
console.log(id, fullName, salary, company);
