
class Calculator {
    num1: number;
    num2: number;

    // constructor(num1, num2){
    //     this.num1 = num1;
    //     this.num2 = num2;
    // }
    static getadd(num1: number, num2: number) {
        return num1 + num2;
    }

    static getsub(num1: number, num2: number) {
        return num1 - num2;
    }

    static getmult(num1: number, num2: number) {
        return num1 * num2;
    }

    static getdivision(num1: number, num2: number) {
        return num1 / num2;
    }


}
let calculator = new Calculator();
console.log("Addition of two numbers (23+ 12)=" + " " + Calculator.getadd(23, 12));
console.log("Subtraction of two numbers (45 - 34 ) =" + " " + Calculator.getsub(45, 34));
console.log("Multiplication of two numbers (12 * 6) =" + " " + Calculator.getmult(12, 6));
console.log("Division of two numbers (40 / 2) = " + " " + Calculator.getdivision(40, 2));








