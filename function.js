function doubleMe(x) {
    // checking input parameter as number or not
    if (x && typeof x === "number") {
        console.log(x * 2);
    }
    // checking input para as string or not
    else if (x && typeof x === "string") {
        console.log(x + " " + x);
    }
    else if (Array.isArray(x)) {
        return x.map(function (name) { return console.log(x + " " + x); });
    }
}
doubleMe(2); // calling the function 
doubleMe("John");
doubleMe(["Codemind", "tet"]);
var product = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var result = 1;
    for (var i = 0; i < nums.length; i++) {
        console.log(nums[i]);
        result *= nums[i];
    }
    return result;
};
console.log(product(2, 3, 4, 5));
console.log("=================");
var factorial = function () {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var resu = 1;
    for (var index = 0; index < nums.length; index++) {
        console.log(nums[index]);
        resu *= nums[index];
    }
    return resu;
};
console.log(factorial(4, 5, 6, 7));
var hello = function (name) {
    return "Hello" + name;
};
console.log(hello("AngularBatch4"));
var multiple = function (num1, num2) {
    return num1 * num2;
};
console.log(multiple(2, 7));
