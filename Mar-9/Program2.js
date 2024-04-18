console.log("Welcome to Higher Order Functions");

function Server() {
   console.log("Task 1");
   console.log("Task 2");
   console.log("Task 3");
}

function Client1() {
   console.log("Entering Client1");
   Server();
   console.log("Leaving Client1");
}

function Client2() {
   console.log("Entering Client2");
   Server();
   console.log("Leaving Client2");
}

Client1();
Client2();