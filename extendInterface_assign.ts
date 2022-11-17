interface IPerson {
name: string;

}

interface IEmployee {
    id: number;
    salary: number;

}

interface IDeveloper extends IPerson, IEmployee {
    language: string;
}

var dev: IDeveloper = {
    language: "TypeScript",
    id: 101,
    name: "Kavya",
    salary: 50000
}
console.log(dev);


console.log("-----------------------------------------------------------------");
interface IStudent1 {
    studentName: string;
    rollNo: number;

}

interface IStudent2 {
    studentAddress: string;
standar: number;

}

interface ICollege extends IStudent1, IStudent2 {
    collegeName: string;
    city: string;
}

var clg: ICollege = {
    collegeName: "K.R.P",
    city: "Islampur",
    studentName: "Arnavi",
    studentAddress: "Karad",
    rollNo: 25,
    standar: 12, 
}
console.log(clg);

// console.log("-----------------------------------------------------------------------");

// interface  IZomato{
//     restaurent_name:string;
//     food_item:string;
       
// }
// interface ISwaiggy{
//     rating:number;
//     order_number:number;

// }
// interface IFoodApp extends IZomato ,ISwaiggy {
//     customer_name:string;
//     customer_email:string|number; 
//     customer_address:string;
//     customer_phone:number;

// }
// var online : IFoodApp = {
//     restaurent_name:"Kirti Mahal Legacy",
//     food_item:"Pure vag",
//     order_number:101,
//      customer_name:"Suresh",
//      customer_email:"Suresg123@gmail.com",
//     customer_phone:8907654321,
//     customer_address:"xyz",
//     rating: 4,
// }
// console.log(online);


//console.log("--------------------------------------------------------------");
interface IPlayer {
    playerName: string;
    age: number;
}

interface ICriceter {
    teams: string;
    role: string;
}

interface IPlaying extends IPlayer, ICriceter {
    match: string;
    date: number;
    venu: string;
}

var match:IPlaying = {
    playerName: "MS Dhoni",
    age: 41,
    teams: `"India", "CSK"`,
    role: "WK-Batsman",
    match: "India Vs Pakistan",
    date: 23/11/2022,
    venu:"London"

}
console.log(match);
