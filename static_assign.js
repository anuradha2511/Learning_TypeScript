// class Calculator {
//     static addition: number = 0;
//     static substraction: number = 0;
//     static multiplication: number = 0;
//     static division: number = 0;
//     static modulus: number = 0;
//     num1:number;
//     num2:number;
// display() {
//     Calculator.addition = 23 + 20;
//     console.log(` Addition of 23 + 20 = ${Calculator.addition}`);
//     Calculator.substraction = 64 - 20;
//     console.log(` Substraction of 64 - 20 = ${Calculator.substraction}`);
//     Calculator.multiplication = 32 * 25;
//     console.log(`Multiplication of 32 * 25 = ${Calculator.multiplication}`);
//     Calculator.division = 75 / 4;
//     console.log(` Division of 75 / 4 = ${Calculator.division}`);
//     Calculator.modulus = 57 % 6 ;
//     console.log(` Modulo = ${Calculator.modulus}`);
// }
// }
// var objCalculator = new Calculator();
// objCalculator.display();
console.log("----------------------------------------------");
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    // constructor(num1, num2){
    //     this.num1 = num1;
    //     this.num2 = num2;
    // }
    Calculator.getadd = function (num1, num2) {
        return num1 + num2;
    };
    Calculator.getsub = function (num1, num2) {
        return num1 - num2;
    };
    Calculator.getmult = function (num1, num2) {
        return num1 * num2;
    };
    Calculator.getdivision = function (num1, num2) {
        return num1 / num2;
    };
    return Calculator;
}());
var calculator = new Calculator();
console.log("Addition of two numbers (23+ 12)=" + " " + Calculator.getadd(23, 12));
console.log("Subtraction of two numbers (45 - 34 ) =" + " " + Calculator.getsub(45, 34));
console.log("Multiplication of two numbers (12 * 6) =" + " " + Calculator.getmult(12, 6));
console.log("Division of two numbers (40 / 2) = " + " " + Calculator.getdivision(40, 2));
