console.log("------------------------ Speed--- ------------------------------");
var Speed;
(function (Speed) {
    Speed[Speed["Slow"] = 0] = "Slow";
    Speed[Speed["Medium"] = 1] = "Medium";
    Speed[Speed["Fast"] = 2] = "Fast";
})(Speed || (Speed = {}));
console.log(Speed);
console.log(Speed.Fast);
console.log(Speed.Medium);
console.log(Speed.Slow);
console.log("----------------------- AppStatus ------------------------------");
var AppStatus;
(function (AppStatus) {
    AppStatus[AppStatus["Active"] = 0] = "Active";
    AppStatus[AppStatus["Inactive"] = 1] = "Inactive";
    AppStatus[AppStatus["OnHold"] = 2] = "OnHold";
})(AppStatus || (AppStatus = {}));
console.log(AppStatus);
console.log(AppStatus[1]);
console.log(AppStatus[0]);
console.log(AppStatus[2]);
console.log("----------------------- TimeFrames ------------------------------");
var TimeFrames;
(function (TimeFrames) {
    TimeFrames[TimeFrames["Hour"] = 0] = "Hour";
    TimeFrames[TimeFrames["Day"] = 1] = "Day";
    TimeFrames[TimeFrames["Week"] = 2] = "Week";
    TimeFrames[TimeFrames["Month"] = 3] = "Month";
    TimeFrames[TimeFrames["Year"] = 4] = "Year";
})(TimeFrames || (TimeFrames = {}));
console.log(TimeFrames);
console.log("----------------------- Direction ------------------------------");
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["East"] = 1] = "East";
    Direction[Direction["South"] = 2] = "South";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
console.log(Direction);
console.log(Direction[1]);
console.log(Direction[3]);
