var vaxin: string = ["J&J", "Pfizer" ,"Sputnik"];
console.log("Given array")
console.log(vaxin);


console.log(` Add one element "Covaxin` );
vaxin.push("Covaxin");
console.log(vaxin);

console.log(" ");

console.log(" Traverse array using for of loop");
for (const iterator of vaxin) {
    console.log(iterator);
    
}
console.log(" ");
console.log("Destructuring array");
let [e_0, e_1, e_2, e_3] = vaxin;
console.log(e_0, e_1, e_2, e_3);





