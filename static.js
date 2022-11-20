var Check = /** @class */ (function () {
    function Check() {
    }
    Check.prototype.display = function () {
        Check.bankname = "BOB";
        console.log(Check.bankname);
    };
    Check.bankname = "Bank of India";
    return Check;
}());
var objCheck = new Check();
//var bankName = Check.bankname;
objCheck.display();
