console.log("Welcome to Higher Order Functions");

function Server(v) {
   console.log("Task 1");
   switch (v) {
       case 0: console.log("Task 2 - v1");
           break;
       case 1: console.log("Task 2 - v2");
           break;
       default: console.log("Task 2");

   }
   console.log("Task 3");
}

function Client1() {
   console.log("Entering Client1");
   Server(0);
   console.log("Leaving Client1");
}

function Client2() {
   console.log("Entering Client2");
   Server(1);
   console.log("Leaving Client2");
}

function Client3() {
   console.log("Entering Client3");
   Server();
   console.log("Leaving Client3");
}

Client1();
Client2();
Client3();