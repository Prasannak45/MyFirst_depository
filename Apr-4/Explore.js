class PiggyBank {
   #balance = 0;
   #lt = 0;
   #weight = 0;
   #heavyListeners = [];

   deposit(v) {
       if (v > 0) {
           this.#balance += v;
           this.#lt = v;
           let w = this.weight;
           if (this.#weight != w) {
               this.#weight = w;
               if (w == 2) {
                   for (let listener of this.#heavyListeners) {
                       listener();
                   }
               }
           }
       }
   }
   withdraw(v) {
       if (v > 0 && v <= this.#balance) {
           this.#balance -= v;
           this.#lt = -v;
           let w = this.weight;
           if (this.#weight != w) this.#weight = w;
       }
   }
   statement() {
       console.log("PiggyBank Statement");
       console.log(`balance = ${this.#balance}`);
       console.log(`lt = ${this.#lt}`);
       console.log(`${(v => ['Light', 'Medium', 'Heavy'][v])(this.#weight)} Weight`);
   }

   get weight() { return this.#balance < 500 ? 0 : this.#balance < 1000 ? 1 : 2 }
  
   addHeavyListener(listener) {
       this.#heavyListeners.push(listener);
   }

   removeHeavyListener(listener) {
       var i = this.#heavyListeners.indexOf(listener);
       if (i != -1) {
           this.#heavyListeners.splice(i, 1);
       }
   }

   removeAllHeavyListeners() {
       this.#heavyListeners.length = 0;
   }
}

let pg1 = new PiggyBank();


function HeavyListener1() {
   console.log("Heavy Listener1 ... doing work");
}

function HeavyListener2() {
   console.log("Heavy Listener2 ... doing work");
}

function main() {
   pg1.addHeavyListener(HeavyListener1);
   pg1.addHeavyListener(HeavyListener2);
   pg1.addHeavyListener(() => { console.log("Listener3 ... doing work") });
   pg1.statement();
   pg1.deposit(30);
   pg1.withdraw(5);
   pg1.deposit(600);
   pg1.statement();
   pg1.deposit(700);
   pg1.statement();
   pg1.withdraw(1000);
   pg1.statement();
   pg1.removeHeavyListener(HeavyListener2);
   pg1.deposit(2000);
   pg1.removeAllHeavyListeners();
   pg1.deposit(5000);
   pg1.statement();
}

main();