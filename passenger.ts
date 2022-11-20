
class Passenger {
    firstName: string;
    lastName: string;
    frequentFlyerno: number
    constructor(firstName: string, lastName: string, flightno: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerno = flightno;
    }
    display() {
        console.log(this.firstName + " " + this.lastName + " " + this.frequentFlyerno);

    }
}

var passenger = new Passenger("Jack", "Sparrow", 102);

//console.log(passenger);
passenger.display();

var passenger2 = new Passenger("Harry", "Potter", 479)
passenger2.display();

for (let item in passenger) {
    if (item !== "display") {
        console.log(item);
        console.log(passenger[item]);

    }

}

// for (let item in passenger) {
//     if (passenger[item] instanceof Function) {
//         continue;
//     }
//     else {
//         console.log(item);
//         console.log(passenger[item]);

//     }

// }

