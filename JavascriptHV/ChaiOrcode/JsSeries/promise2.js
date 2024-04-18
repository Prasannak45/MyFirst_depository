let promise=new Promise(()=>{
    console.log("Promise is pending");
    setTimeout(()=>{
        console.log("I am promise and i am fulfilled");
        reject(new Error("I am an error"));
    },5000)
});

console.log(promise);

