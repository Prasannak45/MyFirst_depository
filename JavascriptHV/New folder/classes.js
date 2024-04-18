class BankAccount {
    customerName;
    accountNumber;
    balance=0;


    constructor(customerName, balance=0){
         this.customerName=customerName;
         this.accountNumber=Date.now();
         this.balance=balance;
    }
}

const rakeshAccount= new BankAccount("Rakesh", 1000);
console.log(rakeshAccount);