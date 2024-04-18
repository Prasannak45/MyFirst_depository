function Piggybank() {
    if(new.target !== Piggybank)
    {
        console.log("Constructor called without new");
        return null;
    }
    let balance = 0;
    let lt = 0;
    function deposit(v) {
        balance = balance + v;
        lt = v;
    }
    function withdraw(v) {
        if (balance >= v) {
            balance = balance - v;
            lt = -v;
        }
    }
    function statement() {
        console.log("Balance = " + balance);
        console.log("Last Transaction = " + lt);
    }
    this.deposit = deposit;
    this.withdraw = withdraw;
    this.statement = statement;
 }
 
 console.log("Piggybank1");
 var pg1 = new Piggybank();
 pg1.deposit(100);
 pg1.statement();
 pg1.withdraw(50);
 pg1.statement();
 pg1.withdraw(10);
 pg1.statement();
 
 console.log("Piggybank2");
 var pg2 = new Piggybank();
 pg2.deposit(200);
 pg2.statement();
 pg2.withdraw(100);
 pg2.statement();
 pg2.withdraw(50);
 pg2.statement();
 
 console.log("Piggybank3");
 var pg3 = Piggybank();
 pg3?.deposit(300);
 pg3?.statement();
 pg3?.withdraw(200);
 pg3?.statement();
 pg3?.withdraw(100);
 pg3?.statement();