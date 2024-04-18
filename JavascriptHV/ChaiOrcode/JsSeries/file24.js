//Immediate invoked function execution
(function chai(){
    console.log("DB CONNECTED");
})();

(()=>{
    console.log("DB CONNECTED TWO");
})();


((name1)=>{
console.log(`name is ${name1}`);
})("Hitesh");