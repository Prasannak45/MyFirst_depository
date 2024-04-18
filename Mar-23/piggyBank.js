class PiggyBank {
    balance = 0;
    lt = 0;
    constructor(balance){
        this.balance = balance;
        this.lt = balance;
    }
 }
 
 var pg1 = new PiggyBank(1000);
 var pg2 = new PiggyBank(2000);
 console.log(pg1);
 console.log(pg2);