var vaxin = ["J&J", "Pfizer", "Sputnik"];
console.log("Given array");
console.log(vaxin);
console.log(" Add one element \"Covaxin");
vaxin.push("Covaxin");
console.log(vaxin);
console.log(" ");
console.log(" Traverse array using for of loop");
for (var _i = 0, vaxin_1 = vaxin; _i < vaxin_1.length; _i++) {
    var iterator = vaxin_1[_i];
    console.log(iterator);
}
console.log(" ");
console.log("Destructuring array");
var e_0 = vaxin[0], e_1 = vaxin[1], e_2 = vaxin[2], e_3 = vaxin[3];
console.log(e_0, e_1, e_2, e_3);
