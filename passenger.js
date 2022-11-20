var Passenger = /** @class */ (function () {
    function Passenger(firstName, lastName, flightno) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerno = flightno;
    }
    Passenger.prototype.display = function () {
        console.log(this.firstName + " " + this.lastName + " " + this.frequentFlyerno);
    };
    return Passenger;
}());
var passenger = new Passenger("Jack", "Sparrow", 102);
//console.log(passenger);
passenger.display();
var passenger2 = new Passenger("Harry", "Potter", 479);
passenger2.display();
for (var item in passenger) {
    if (item !== "display") {
        console.log(item);
        console.log(passenger[item]);
    }
}
