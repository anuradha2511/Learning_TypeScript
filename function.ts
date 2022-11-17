
function doubleMe(x:number); // declaration 
function doubleMe(y:string); // function declaration
function doubleMe(arr:string[]);


function doubleMe(x:any) { // function implementation
// checking input parameter as number or not
if(x && typeof x === "number")
{
    console.log(x*2);
}
// checking input para as string or not
else if(x && typeof x === "string")
{
    console.log(x + " "+ x);
} 
else if (Array.isArray(x))
{
  return x.map(name => console.log(x + " " + x))
}
}

doubleMe(2); // calling the function 
doubleMe("John");
doubleMe(["Codemind", "tet"]);

var product = function(...nums)
{
    var result = 1;
    for(var i = 0; i<nums.length; i++)
    {
        console.log(nums[i]);
        result *= nums[i];
    }
    return result;
}
console.log(product(2, 3, 4, 5));

console.log("=================");

var factorial = function(...nums)
{
    var resu = 1;
for (let index = 0; index < nums.length; index++)
 {
        console.log(nums[index]);
        resu *= nums[index]
    
}
return resu
}
console.log(factorial(4, 5, 6, 7));


var hello = (name:string): string => {
    return "Hello" + name;
};
console.log(hello("AngularBatch4"));


var multiply = (num1:number, num2:number) : number => {
    return num1 * num2;
};
console.log(multiply(2, 7));



