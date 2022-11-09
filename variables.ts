var n1 : number = 10;
console.log(n1);

var s1 : string = "you are the creater of your density";
var s2 : string = `powerful people come from powerful places`;

console.log(s1);
console.log(s2);

var a1 : any = {
    production: 1,
    productionName: `iPhone`,
    productionID: 25000
}
console.log(a1);

// homogeneous array
var arr1 : Array<string> = ['Angular', 'React', 'NodeJs', 'Java'];

// heterogeneous array
var arr2 : Array<any> = ['Angular', 123456, true];
arr2.push('.NetCore');
console.log(arr2);




