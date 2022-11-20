class Check {
    static bankname: string = "Bank of India";
    customerName: string;
    accNo: number;
display() {
    Check.bankname = "BOB";
    console.log(Check.bankname);
    
}
}

var objCheck = new Check();
 //var bankName = Check.bankname;
 objCheck.display();