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
var Application = /** @class */ (function () {
    function Application() {
    }
    Application.prototype.display = function () {
        console.log("Event management for Farewell ");
    };
    return Application;
}());
var Organizer = /** @class */ (function (_super) {
    __extends(Organizer, _super);
    function Organizer(id, name) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        return _this;
    }
    Organizer.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("".concat(this.id, " ").concat(this.name));
    };
    return Organizer;
}(Application));
var Even = /** @class */ (function (_super) {
    __extends(Even, _super);
    function Even(id, name, description, starttime) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.description = description;
        _this.starttime = starttime;
        return _this;
    }
    Even.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("".concat(this.id, " ").concat(this.name, " ").concat(this.description, " ").concat(this.starttime, " "));
    };
    return Even;
}(Application));
var Venue = /** @class */ (function (_super) {
    __extends(Venue, _super);
    function Venue(id, name, description, address) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.name = name;
        _this.description = description;
        _this.address = address;
        return _this;
    }
    Venue.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("".concat(this.id, " ").concat(this.name, " ").concat(this.description, " ").concat(this.address));
    };
    return Venue;
}(Application));
var display = new Array(new Organizer(25, "Arnav"), new Even(25, "Arnav", "Event for Farewell part", "5 to 7 pm"), new Venue(25, "Arnav", "Welcome to Farewell party", "Near Alankar hotel"));
for (var _i = 0, display_1 = display; _i < display_1.length; _i++) {
    var per = display_1[_i];
    per.display();
}
