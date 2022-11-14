console.log(" Grade assignment using function and for take input from user using prompt");
var math = prompt("Enter your maths marks");
var num1 = parseInt(math);
var physics = prompt("Enter your physics marks");
var num2 = parseInt(physics);
var chem = prompt("Enter chemistry marks");
var num3 = parseInt(chem);
console.log("Your subject marks are");
console.log("Maths = ", math);
console.log("Physics = ", physics);
console.log("Chemistry = ", chem);
var sum = (num1 + num2 + num3);
console.log("Your total marks : ", sum);
var average = sum / 3;
console.log("Your average : ", average);
if (average < 70) {
    console.log("C grade");
}
if (average > 70 && average < 90) {
    console.log("B grade");
}
if (average > 90) {
    console.log(" A grade");
}
