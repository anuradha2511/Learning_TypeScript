var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.Work = function () {
        console.log("Person Details");
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firstName, lastName, designation) {
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.designation = designation;
        return _this;
    }
    Student.prototype.Work = function () {
        _super.prototype.Work.call(this);
        console.log("".concat(this.firstName, " ").concat(this.lastName, " ").concat(this.designation));
    };
    return Student;
}(Person));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, designation) {
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.designation = designation;
        return _this;
    }
    Employee.prototype.Work = function () {
        _super.prototype.Work.call(this);
        console.log("".concat(this.firstName, " ").concat(this.lastName, " ").concat(this.designation));
    };
    return Employee;
}(Person));
var Tranier = /** @class */ (function (_super) {
    __extends(Tranier, _super);
    function Tranier(firstName, lastName, designation) {
        var _this = _super.call(this) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.designation = designation;
        return _this;
    }
    Tranier.prototype.Work = function () {
        _super.prototype.Work.call(this);
        console.log("".concat(this.firstName, " ").concat(this.lastName, " ").concat(this.designation));
    };
    return Tranier;
}(Person));
var person = new Array(new Student("Anuradha", "Patil", "Student"), new Employee("Om", "Pawar", "Employee"), new Tranier("Kavya", "Bhosle", "Trainer"));
for (var _i = 0, person_1 = person; _i < person_1.length; _i++) {
    var per = person_1[_i];
    per.Work();
}
