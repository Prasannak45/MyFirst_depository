class PiggyBank {
   constructor() {
       if (PiggyBank.count === undefined) PiggyBank.count = 0;
       PiggyBank.count++;
       this.balance = 0;
       this.lt = 0;
   }
   deposit(v) {
       if (v > 0) {
           this.balance += v;
           this.lt = v;
       }
   }
   withdraw(v) {
       if (v > 0 && v <= this.balance) {
           this.balance -= v;
           this.lt = -v;
       }
   }
   statement() {
       console.log(`Balance = ${this.balance}`);
       console.log(`Last Transaction = ${this.lt}`);
   }
   static printObjectCount() {
       console.log("Entering static Method printObjectCount");
       console.log(`Object Count = ${PiggyBank.count}`);
       console.log("Leaving static Method printObjectCount");
   }
}
const pg1 = new PiggyBank();
const pg2 = new PiggyBank();
const pg3 = new PiggyBank();
PiggyBank.printObjectCount();